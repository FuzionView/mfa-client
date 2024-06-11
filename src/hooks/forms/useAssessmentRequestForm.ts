import { AssessmentContactMethod, AssessmentRequest } from '@types';
import { usePersistFormInput } from '../usePersistFormInput';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { useCreateAssessmentRequest } from '../queries/useCreateAssessmentRequest';
import { useMemo } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AssessmentRequestSchema } from 'mfa-server/src/schemas/AssessmentRequestSchema';

const DEFAULT_VALUES: Partial<AssessmentRequest> = {
  notes: null,
  contact_method: AssessmentContactMethod.Email,
  availability: [],
};

export const useAssessmentRequestForm = (propertyId: number) => {
  const navigate = useNavigate();
  const { getSavedInput, saveInput } = usePersistFormInput('request-assessment-form');
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateAssessmentRequest({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully submitted your assessment request!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error submitting your assessment request',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      propertyId,
      ...getSavedInput(),
    }),
    [getSavedInput],
  );

  const form = useForm<AssessmentRequest>({
    defaultValues,
    resolver: zodResolver(AssessmentRequestSchema),
  });

  const handleSubmit: SubmitHandler<AssessmentRequest> = (data: AssessmentRequest) => {
    // @ts-expect-error this is fine
    mutate({ propertyId, assessmentRequest: data });

    // clear cached form values from localstorage
    saveInput({});
  };

  const handleError: SubmitErrorHandler<AssessmentRequest> = (error) => {
    console.error(error, form.getValues());

    addToast({
      title: 'Form error',
      message: JSON.stringify(Object.keys(error)),
      intent: 'error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  // Persist input that users have typed
  form.watch((data) => {
    saveInput(data);
  });

  return { form, onSubmit, isSubmitPending };
};

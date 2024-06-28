import { useMemo } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { AssessmentRequestSchema } from 'mfa-server/src/schemas/AssessmentRequestSchema';

import { AssessmentContactMethod, AssessmentRequest } from '@types';
import { useStore } from '../../store';
import { useCreateAssessmentRequest } from '../queries/useCreateAssessmentRequest';
import { usePersistFormInput } from '../usePersistFormInput';

const DEFAULT_VALUES: Partial<AssessmentRequest> = {
  availability: [],
  contact_method: AssessmentContactMethod.Email,
  notes: null,
};

export const useAssessmentRequestForm = (propertyId: number) => {
  const navigate = useNavigate();
  const { getSavedInput, saveInput } = usePersistFormInput(`request-assessment-form-${propertyId}`);
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateAssessmentRequest({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error submitting your assessment request',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Successfully submitted your assessment request!',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      property_id: propertyId,
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
    mutate({ assessmentRequest: data, propertyId });

    // clear cached form values from localstorage
    saveInput({});
  };

  const handleError: SubmitErrorHandler<AssessmentRequest> = (error) => {
    console.error(error, form.getValues());

    addToast({
      intent: 'error',
      message: JSON.stringify(Object.keys(error)),
      title: 'Form error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  // Persist input that users have typed
  form.watch((data) => {
    saveInput(data);
  });

  return { form, isSubmitPending, onSubmit };
};

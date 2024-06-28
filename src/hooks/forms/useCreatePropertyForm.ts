import { useMemo } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropertySchema } from 'mfa-server/src/schemas/PropertySchema';

import { Property } from '@types';
import { useStore } from '../../store';
import { useCreateProperty } from '../queries/useCreateProperty';
import { usePersistFormInput } from '../usePersistFormInput';

const DEFAULT_VALUES: Partial<Property> = {
  address: '',
  address_2: '',
  address_type: undefined,
  city: '',
  comments: '',
  county: '',
  current_stewardship_plan: false,
  date_added: new Date(),
  estimated_total_acres: undefined,
  parcel_id: '',
  plan_date: undefined,
  range: '',
  section: '',
  state: '',
  township: '',
  zip: '',
};

export const useCreatePropertyForm = () => {
  const { getSavedInput, saveInput } = usePersistFormInput('property-form');
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateProperty({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error adding your property',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Successfully added your property!',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      ...getSavedInput(),
      user_id: user?.sub,
    }),
    [getSavedInput, user],
  );

  const form = useForm<Property>({
    defaultValues,
    resolver: zodResolver(PropertySchema),
  });

  const handleSubmit: SubmitHandler<Property> = (property) => {
    // @ts-expect-error this is fine
    mutate({ property, userId: user.sub });

    // Clear localstorage
    saveInput({});
  };

  const handleError: SubmitErrorHandler<Property> = (error) => {
    console.error(error, form.getValues());
    addToast({
      intent: 'error',
      message: JSON.stringify(Object.keys(error)),
      title: 'Form error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  // Persist
  form.watch((data) => {
    saveInput(data);
  });

  return { form, isSubmitPending, onSubmit };
};

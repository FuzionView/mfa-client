import { Property } from '@types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePersistFormInput } from './usePersistFormInput';
import { useMemo } from 'react';
import { PropertySchema } from 'mfa-server/src/schemas/PropertySchema';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { useCreateProperty } from './useCreateProperty';

const DEFAULT_VALUES: Partial<Property> = {
  address_type: undefined,
  address: '',
  address_2: '',
  city: '',
  date_added: new Date(),
  state: '',
  zip: '',
  section: '',
  township: '',
  range: '',
  county: '',
  estimated_total_acres: undefined,
  parcel_id: '',
  comments: '',
  current_stewardship_plan: false,
  plan_date: undefined,
};

export const useCreatePropertyForm = () => {
  const { getSavedInput, saveInput } = usePersistFormInput('property-form');
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateProperty({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully added your property!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error adding your property',
        message: error?.message,
        intent: 'error',
      });
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
    mutate({ userId: user.sub, property });

    // Clear localstorage
    saveInput({});
  };

  const handleError: SubmitErrorHandler<Property> = (error) => {
    console.error(error, form.getValues());
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  // Persist
  form.watch((data) => {
    saveInput(data);
  });

  return { form, onSubmit, isSubmitPending };
};

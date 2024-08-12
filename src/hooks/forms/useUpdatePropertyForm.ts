import { useMemo } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropertySchema } from 'mfa-server/schemas/PropertySchema.ts';

import { Property } from '@types';
import { useStore } from '../../store';
import { useUpdateProperty } from '../queries/currentUser/useUpdateProperty';

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

export const useUpdatePropertyForm = (propertyId: number) => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      user_id: user?.sub,
    }),
    [user],
  );

  const form = useForm<Property>({
    defaultValues,
    resolver: zodResolver(PropertySchema),
  });

  const { mutate, isPending: isSubmitPending } = useUpdateProperty({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error updating property',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Successfully updated property!',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const handleSubmit: SubmitHandler<Property> = (data) => {
    // @ts-expect-error this is fine
    mutate({ property: data, propertyId, userId: user.sub });
  };

  const handleError: SubmitErrorHandler<Property> = (error) => {
    console.error('Form error', error);

    addToast({
      intent: 'error',
      message: JSON.stringify(Object.keys(error)),
      title: 'Form error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  return { form, isSubmitPending, onSubmit };
};

import { Property } from '@types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { PropertySchema } from 'mfa-server/src/schemas/PropertySchema';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { useUpdateProperty } from '../queries/useUpdateProperty';

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
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully updated property!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error updating property',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleSubmit: SubmitHandler<Property> = (data) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, propertyId, property: data });
  };

  const handleError: SubmitErrorHandler<Property> = (error) => {
    console.error('Form error', error);

    addToast({
      title: 'Form error',
      message: JSON.stringify(Object.keys(error)),
      intent: 'error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  return { form, onSubmit, isSubmitPending };
};

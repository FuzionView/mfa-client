import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from 'mfa-server/src/schemas/UserProfileSchema';

import { UserProfile } from '@types';
import { useStore } from '../../store';
import { useUpdateProfile } from '../queries/useUpdateProfile';

const DEFAULT_VALUES: Partial<UserProfile> = {
  address: '',
  address_2: '',
  business_name: '',
  city: '',
  email: '',
  first_name: '',
  last_name: '',
  mailing_list: true,
  mfa_member: false,
  phone: '',
  phone_2: '',
  state: '',
  user_type: undefined,
  zip: '',
};

export const useUpdateProfileForm = (profile: Partial<UserProfile> = DEFAULT_VALUES) => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);

  const form = useForm<UserProfile>({
    defaultValues: profile,
    resolver: zodResolver(UserProfileSchema),
  });

  const { mutate, isPending: isSubmitPending } = useUpdateProfile({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error updating your profile',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Successfully updated your profile!',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const handleSubmit: SubmitHandler<UserProfile> = (data) => {
    // @ts-expect-error this is fine
    mutate({ profile: data, userId: user.sub });
  };

  const handleError: SubmitErrorHandler<UserProfile> = (error) => {
    console.error(error, form.getValues());

    addToast({
      intent: 'error',
      message: JSON.stringify(Object.keys(error)),
      title: 'Form error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  return { form, isSubmitPending, onSubmit };
};

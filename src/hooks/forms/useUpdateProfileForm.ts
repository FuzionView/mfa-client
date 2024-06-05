import { UserProfile } from '@types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from 'mfa-server/src/schemas/UserProfileSchema';
import { useUpdateProfile } from '../queries/useUpdateProfile';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

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
  phone_2: '',
  phone: '',
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
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully updated your profile!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error updating your profile',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleSubmit: SubmitHandler<UserProfile> = (data) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, profile: data });
  };

  const handleError: SubmitErrorHandler<UserProfile> = (error) => {
    console.error(error, form.getValues());

    addToast({
      title: 'Form error',
      message: JSON.stringify(Object.keys(error)),
      intent: 'error',
    });
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  return { form, onSubmit, isSubmitPending };
};

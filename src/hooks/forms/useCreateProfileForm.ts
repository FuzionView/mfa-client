import { useMemo } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from 'mfa-server/src/schemas/UserProfileSchema';

import { UserProfile } from '@types';
import { useStore } from '../../store';
import { useCreateProfile } from '../queries/useCreateProfile';
import { usePersistFormInput } from '../usePersistFormInput';

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

export const useCreateProfileForm = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { getSavedInput, saveInput } = usePersistFormInput('profile-form');
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateProfile({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error creating your profile',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Successfully created your profile!',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      email: user?.email ?? '',
      ...getSavedInput(),
    }),
    [getSavedInput],
  );

  const form = useForm<UserProfile>({
    defaultValues,
    resolver: zodResolver(UserProfileSchema),
  });

  const handleSubmit: SubmitHandler<UserProfile> = (data: UserProfile) => {
    // @ts-expect-error this is fine
    mutate({ profile: data, userId: user.sub });

    // clear cached form values from localstorage
    saveInput({});
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

  // Persist input that users have typed
  form.watch((data) => {
    saveInput(data);
  });

  return { form, isSubmitPending, onSubmit };
};

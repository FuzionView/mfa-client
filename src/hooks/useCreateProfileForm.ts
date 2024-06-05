import { UserProfile } from '@types';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from 'mfa-server/src/schemas/UserProfileSchema';
import { useAuth0 } from '@auth0/auth0-react';
import { usePersistFormInput } from './usePersistFormInput';
import { useMemo } from 'react';
import { useCreateProfile } from './useCreateProfile';
import { useStore } from '../store';
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

export const useCreateProfileForm = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { getSavedInput, saveInput } = usePersistFormInput('profile-form');
  const addToast = useStore((state) => state.addToast);

  const { mutate, isPending: isSubmitPending } = useCreateProfile({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully created your profile!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error creating your profile',
        message: error?.message,
        intent: 'error',
      });
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
    mutate({ userId: user.sub, profile: data });

    // clear cached form values from localstorage
    saveInput({});
  };

  const handleError: SubmitErrorHandler<UserProfile> = (error) => {
    console.error(error, form.getValues());
  };

  const onSubmit = form.handleSubmit(handleSubmit, handleError);

  // Persist input that users have typed
  form.watch((data) => {
    saveInput(data);
  });

  return { form, onSubmit, isSubmitPending };
};

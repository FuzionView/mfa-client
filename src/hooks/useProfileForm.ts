import { UserProfile } from '@types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfileSchema } from 'mfa-server/src/schemas/UserProfileSchema';
import { useAuth0 } from '@auth0/auth0-react';
import { usePersistFormInput } from './usePersistFormInput';
import { useMemo } from 'react';

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

export const useProfileForm = () => {
  const { user } = useAuth0();
  const { getSavedInput, saveInput } = usePersistFormInput('profile-form');

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

  // Persist
  form.watch((data) => {
    saveInput(data);
  });

  return form;
};

import { UserProfile } from '@types';
import { useForm } from 'react-hook-form';

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
  return useForm<UserProfile>({
    defaultValues: DEFAULT_VALUES,
  });
};

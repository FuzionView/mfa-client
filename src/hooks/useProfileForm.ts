import { UserProfile } from '@types';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const INITIAL_STATE: Partial<UserProfile> = {
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

export const useProfileForm = create(
  combine(INITIAL_STATE, (set) => ({
    setField: (field: keyof UserProfile, value: string | number | boolean) =>
      set(() => ({ [field]: value })),
  })),
);

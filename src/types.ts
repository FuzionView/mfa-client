export type UserType = 'landowner' | 'forester';
export interface UserProfile {
  address: string;
  address_2: string;
  business_name: string;
  city: string;
  email: string;
  first_name: string;
  last_name: string;
  mailing_list: boolean;
  mfa_member: boolean;
  phone_2: string;
  phone: string;
  state: string;
  user_type: UserType;
  zip: string;
}

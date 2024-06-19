import { UseFormReturn } from 'react-hook-form';
import { Flex } from '@radix-ui/themes';
import { UserProfile, UserType } from '@types';

import { BooleanFormField } from './FormFields/BooleanFormField';
import { TextFormField } from './FormFields/TextFormField';

interface Props {
  userType?: UserType;
  form: UseFormReturn<UserProfile>;
}

export const ProfileForm: React.FC<Props> = ({ userType, form }) => (
  <Flex direction="column" gap="2" width={{ initial: 'auto', md: '400px' }}>
    <TextFormField<UserProfile> form={form} label="First Name" field="first_name" />
    <TextFormField<UserProfile> form={form} label="Last Name" field="last_name" />
    <TextFormField<UserProfile> form={form} label="Email" field="email" />
    <TextFormField<UserProfile> form={form} label="Phone" field="phone" />
    <TextFormField<UserProfile> form={form} label="Secondary Phone" field="phone_2" />
    <TextFormField<UserProfile> form={form} label="Mailing Address" field="address" />
    <TextFormField<UserProfile> form={form} label="Address Line 2" field="address_2" />
    <TextFormField<UserProfile> form={form} label="City" field="city" />
    <TextFormField<UserProfile> form={form} label="State" field="state" />
    <TextFormField<UserProfile> form={form} label="Zip" field="zip" />
    {userType === UserType.Forester && (
      <TextFormField<UserProfile> form={form} label="Business Name" field="business_name" />
    )}
    <BooleanFormField<UserProfile> form={form} label="MFA Member?" field="mfa_member" />
    <BooleanFormField<UserProfile> form={form} label="Mailing List?" field="mailing_list" />
  </Flex>
);

import { Flex } from '@radix-ui/themes';
import { TextFormField } from './FormFields/TextFormField';
import { BooleanFormField } from './FormFields/BooleanFormField';
import { UserProfile, UserType } from '@types';
import { useCreateProfileForm } from '../hooks/useCreateProfileForm';

interface Props {
  userType?: UserType;
  form: ReturnType<typeof useCreateProfileForm>;
}

export const ProfileForm: React.FC<Props> = ({ userType, form }) => {
  return (
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
};

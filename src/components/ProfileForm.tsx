import { Flex } from '@radix-ui/themes';
import { TextFormField } from './TextFormField';
import { BooleanFormField } from './BooleanFormField';
import { UserType } from '@types';
import { useCreateProfileForm } from '../hooks/useCreateProfileForm';

interface Props {
  userType?: UserType;
  form: ReturnType<typeof useCreateProfileForm>;
}

export const ProfileForm: React.FC<Props> = ({ userType, form }) => {
  return (
    <Flex direction="column" gap="2" width={{ initial: 'auto', md: '400px' }}>
      <TextFormField form={form} label="First Name" field="first_name" />
      <TextFormField form={form} label="Last Name" field="last_name" />
      <TextFormField form={form} label="Email" field="email" />
      <TextFormField form={form} label="Phone" field="phone" />
      <TextFormField form={form} label="Secondary Phone" field="phone_2" />
      <TextFormField form={form} label="Mailing Address" field="address" />
      <TextFormField form={form} label="Address Line 2" field="address_2" />
      <TextFormField form={form} label="City" field="city" />
      <TextFormField form={form} label="State" field="state" />
      <TextFormField form={form} label="Zip" field="zip" />
      {userType === UserType.Forester && (
        <TextFormField form={form} label="Business Name" field="business_name" />
      )}
      <BooleanFormField form={form} label="MFA Member?" field="mfa_member" />
      <BooleanFormField form={form} label="Mailing List?" field="mailing_list" />
    </Flex>
  );
};

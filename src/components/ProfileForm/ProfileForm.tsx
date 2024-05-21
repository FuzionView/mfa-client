import { Button, Flex, Text, Switch, TextField, Card } from '@radix-ui/themes';
import { useProfileForm } from '../../hooks/useProfileForm';
import { Controller } from 'react-hook-form';
import { UserProfile, UserType } from '@types';

interface FieldProps {
  form: ReturnType<typeof useProfileForm>;
  label: string;
  field: keyof UserProfile;
}

const TextFormField: React.FC<FieldProps> = ({ form, label, field }) => {
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
      <TextField.Root placeholder={label} {...form.register(field)} />
    </Flex>
  );
};

const BooleanFormField: React.FC<FieldProps> = ({ form, label, field }) => {
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
      <Controller
        control={form.control}
        name={field}
        render={({ field: { onChange, onBlur, value } }) => {
          const handleChange = (checked: boolean) =>
            onChange({ target: { checked, name: field, type: 'checkbox' } });
          return <Switch checked={!!value} onCheckedChange={handleChange} onBlur={onBlur} />;
        }}
      />
    </Flex>
  );
};

interface ProfileFormProps {
  form: ReturnType<typeof useProfileForm>;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ form }) => {
  const userType = form.watch('user_type');

  return (
    <Card>
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
        <Button style={{ alignSelf: 'flex-end' }}>Save</Button>
      </Flex>
    </Card>
  );
};

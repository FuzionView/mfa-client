import { Flex, Switch, Text } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { useCreateProfileForm } from '../hooks/useCreateProfileForm';
import { Controller } from 'react-hook-form';

interface FieldProps {
  form: ReturnType<typeof useCreateProfileForm>;
  label: string;
  field: keyof UserProfile;
}

export const BooleanFormField: React.FC<FieldProps> = ({ form, label, field }) => {
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

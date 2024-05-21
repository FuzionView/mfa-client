import { Flex, Text, TextField } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { useProfileForm } from '../hooks/useProfileForm';

interface FieldProps {
  form: ReturnType<typeof useProfileForm>;
  label: string;
  field: keyof UserProfile;
}

export const TextFormField: React.FC<FieldProps> = ({ form, label, field }) => {
  const { errors } = form.formState;
  const message = errors[field]?.message;

  let addlProps: Record<string, string> = {};
  if (message) {
    addlProps.color = 'red';
  }
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
      <TextField.Root placeholder={label} {...form.register(field)} {...addlProps} />
      {message && (
        <Text color="red" size="1">
          {message}
        </Text>
      )}
    </Flex>
  );
};

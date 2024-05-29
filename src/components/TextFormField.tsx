import { Flex, Text, TextField } from '@radix-ui/themes';
import { FieldValues, Path, useForm } from 'react-hook-form';

interface Props<Fields extends FieldValues> {
  form: ReturnType<typeof useForm<Fields>>;
  label: string;
  field: Path<Fields>;
}

export function TextFormField<Fields extends FieldValues>({ form, label, field }: Props<Fields>) {
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
      {message && typeof message === 'string' && (
        <Text color="red" size="1">
          {message}
        </Text>
      )}
    </Flex>
  );
}

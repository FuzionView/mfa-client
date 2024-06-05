import { Flex, Text, TextField } from '@radix-ui/themes';
import { FieldValues, Path, RegisterOptions, useForm } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { InputType } from '@types';
import { useMemo } from 'react';

interface Props<Fields extends FieldValues> {
  form: ReturnType<typeof useForm<Fields>>;
  label: string;
  field: Path<Fields>;
  isOptional?: boolean;
  inputType?: InputType;
}

const numberSetValueAs = (v: any) => {
  if (v) {
    return parseInt(v);
  }
  return undefined;
};

const dateSetValueAs = (v: any) => {
  if (v) {
    return new Date(v);
  }
  return undefined;
};

export function TextFormField<Fields extends FieldValues>({
  form,
  label,
  field,
  isOptional = false,
  inputType = InputType.Text,
}: Props<Fields>) {
  const { errors } = form.formState;
  const message = errors[field]?.message;

  let addlProps: Record<string, string> = {};
  if (message) {
    addlProps.color = 'red';
  }

  const registerOptions = useMemo(() => {
    const options = {} as RegisterOptions;
    if (inputType === InputType.Number) {
      options.setValueAs = numberSetValueAs;
    } else if (inputType === InputType.Date) {
      options.setValueAs = dateSetValueAs;
    }
    return options;
  }, [inputType]);

  return (
    <Flex direction="column" gap="1">
      <FormLabel isOptional={isOptional}>{label}</FormLabel>
      <TextField.Root
        placeholder={label}
        {...form.register(field, registerOptions)}
        {...addlProps}
      />
      {message && typeof message === 'string' && (
        <Text color="red" size="1">
          {message}
        </Text>
      )}
    </Flex>
  );
}

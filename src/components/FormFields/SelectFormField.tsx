import { Controller, FieldValues, Path, useForm } from 'react-hook-form';
import { Flex, Select } from '@radix-ui/themes';

import { FormError } from './FormError';
import { FormLabel } from './FormLabel';

interface Option {
  label: string;
  value: string;
}

interface Props<Fields extends FieldValues> {
  form: ReturnType<typeof useForm<Fields>>;
  label: string;
  field: Path<Fields>;
  options: Option[];
  isOptional?: boolean;
}

export function SelectFormField<Fields extends FieldValues>({
  form,
  label,
  field,
  options,
  isOptional = false,
}: Props<Fields>) {
  const { errors } = form.formState;
  const error = errors[field];

  const addlProps: Record<string, string> = {};
  if (error?.message) {
    addlProps.color = 'red';
  }

  return (
    <Flex direction="column" gap="1">
      <FormLabel isOptional={isOptional}>{label}</FormLabel>
      <Controller
        control={form.control}
        name={field}
        render={({ field: { onChange, value } }) => (
          <Select.Root onValueChange={onChange} value={value} {...addlProps}>
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                {options.map((option) => (
                  <Select.Item value={option.value} key={option.value}>
                    {option.label}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        )}
      />
      <FormError error={error} />
    </Flex>
  );
}

import { CheckboxGroup, Flex } from '@radix-ui/themes';
import { Controller, FieldValues, Path, useForm } from 'react-hook-form';
import { FormLabel } from './FormLabel';
import { FormError } from './FormError';

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

export function MultiSelectFormField<Fields extends FieldValues>({
  form,
  label,
  field,
  options,
  isOptional = false,
}: Props<Fields>) {
  const { errors } = form.formState;
  const error = errors[field];

  let addlProps: Record<string, string> = {};
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
          <CheckboxGroup.Root onValueChange={onChange} value={value}>
            {options.map((option) => (
              <CheckboxGroup.Item key={option.value} value={option.value}>
                {option.label}
              </CheckboxGroup.Item>
            ))}
          </CheckboxGroup.Root>
        )}
      />
      <FormError error={error} />
    </Flex>
  );
}

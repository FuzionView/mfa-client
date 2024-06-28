import { Controller, FieldValues, Path, useForm } from 'react-hook-form';

import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, RadioCards, Text } from '@radix-ui/themes';

import { FormLabel } from './FormLabel';

interface Option {
  label: string;
  description: string;
  value: string;
}

interface Props<Fields extends FieldValues> {
  field: Path<Fields>;
  form: ReturnType<typeof useForm<Fields>>;
  label?: string;
  options: Option[];
}

const getCheckStyle = (option: Option, value: string | number) => ({
  color: 'var(--accent-9)',
  style: {
    height: '40px',
    visibility: value === option.value ? ('visible' as const) : ('hidden' as const),
    width: '40px',
  },
});

export function RadioCardFormField<Fields extends FieldValues>({
  form,
  label,
  field,
  options,
}: Props<Fields>) {
  return (
    <Flex direction="column" gap="1">
      <FormLabel>{label}</FormLabel>
      <Controller
        control={form.control}
        name={field}
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioCards.Root onValueChange={onChange} value={value as string} onBlur={onBlur}>
            {options.map((option) => (
              <RadioCards.Item
                value={option.value}
                style={{ justifyContent: 'flex-start' }}
                key={option.value}
              >
                <Flex gap="2" align="center">
                  <CheckCircledIcon {...getCheckStyle(option, value)} />
                  <Flex direction="column">
                    <Text size="4">{option.label}</Text>
                    <Text>{option.description}</Text>
                  </Flex>
                </Flex>
              </RadioCards.Item>
            ))}
          </RadioCards.Root>
        )}
      />
    </Flex>
  );
}

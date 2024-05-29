import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { Controller, FieldValues, Path, useForm } from 'react-hook-form';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface Option {
  label: string;
  description: string;
  value: string;
}

interface Props<Fields extends FieldValues> {
  form: ReturnType<typeof useForm<Fields>>;
  label?: string;
  field: Path<Fields>;
  options: Option[];
}

const getCheckStyle = (option: Option, value: any) => ({
  style: {
    visibility: value === option.value ? ('visible' as const) : ('hidden' as const),
    height: '40px',
    width: '40px',
  },
  color: 'var(--accent-9)',
});

export function RadioCardFormField<Fields extends FieldValues>({
  form,
  label,
  field,
  options,
}: Props<Fields>) {
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
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

import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { useProfileForm } from '../hooks/useProfileForm';
import { Controller } from 'react-hook-form';
import { CheckCircledIcon } from '@radix-ui/react-icons';

interface Option {
  label: string;
  description: string;
  value: string;
}

interface FieldProps {
  form: ReturnType<typeof useProfileForm>;
  label?: string;
  field: keyof UserProfile;
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

export const RadioCardFormField: React.FC<FieldProps> = ({ form, label, field, options }) => {
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
                    <Text size="4">Landowner</Text>
                    <Text>I own one or more properties that I'd like to register with CBYC</Text>
                  </Flex>
                </Flex>
              </RadioCards.Item>
            ))}
          </RadioCards.Root>
        )}
      />
    </Flex>
  );
};

import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { Controller, UseFormReturn } from 'react-hook-form';

interface UserTypeSelectionProps {
  form: UseFormReturn<UserProfile>;
}

export const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ form }) => {
  const userType = form.watch('user_type');

  return (
    <>
      <Text size="6">I am a...</Text>
      <Controller
        control={form.control}
        name="user_type"
        render={({ field: { onChange, onBlur, value } }) => (
          <RadioCards.Root onValueChange={onChange} value={value} onBlur={onBlur}>
            <RadioCards.Item value="landowner" style={{ justifyContent: 'flex-start' }}>
              <Flex gap="2" align="center">
                <CheckCircledIcon
                  style={{
                    visibility: userType === 'landowner' ? 'visible' : 'hidden',
                    height: '40px',
                    width: '40px',
                  }}
                  color="var(--accent-9)"
                />
                <Flex direction="column">
                  <Text size="4">Landowner</Text>
                  <Text>I own one or more properties that I'd like to register with CBYC</Text>
                </Flex>
              </Flex>
            </RadioCards.Item>
            <RadioCards.Item value="forester" style={{ justifyContent: 'flex-start' }}>
              <Flex gap="2" align="center">
                <CheckCircledIcon
                  style={{
                    visibility: userType === 'forester' ? 'visible' : 'hidden',
                    height: '40px',
                    width: '40px',
                  }}
                  color="var(--accent-9)"
                />
                <Flex direction="column">
                  <Text size="4">Forester</Text>
                  <Text>I own a business related to forest management</Text>
                </Flex>
              </Flex>
            </RadioCards.Item>
          </RadioCards.Root>
        )}
      />
    </>
  );
};

import { CheckCircledIcon } from '@radix-ui/react-icons';
import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { UserType } from '@types';
import { useProfileForm } from '../../hooks/useProfileForm';

export const UserTypeSelection: React.FC = () => {
  const userType = useProfileForm((state) => state.user_type);
  const setField = useProfileForm((state) => state.setField);
  const handleSetUserType = (userType: UserType) => {
    setField('user_type', userType);
  };

  return (
    <>
      <Text size="6">I am a...</Text>
      <RadioCards.Root value={userType} onValueChange={handleSetUserType}>
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
    </>
  );
};

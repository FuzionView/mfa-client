import { Container, Flex, Heading, Callout } from '@radix-ui/themes';
import { UserTypeSelection } from '../components/ProfileForm/UserTypeSelection';
import { ProfileForm } from '../components/ProfileForm/ProfileForm';
import { useProfileForm } from '../hooks/useProfileForm';

export const CreateProfile: React.FC = () => {
  const form = useProfileForm();
  const userType = form.watch('user_type');

  return (
    <Container>
      <Flex direction={'column'} gap="3">
        <Heading size="9">Complete your profile</Heading>
        <Callout.Root>
          <Callout.Text>
            We need some information about you to complete your registration!
          </Callout.Text>
        </Callout.Root>
        <UserTypeSelection form={form} />
        {userType && <ProfileForm form={form} />}
      </Flex>
    </Container>
  );
};

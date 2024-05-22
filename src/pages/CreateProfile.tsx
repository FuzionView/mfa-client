import { Container, Flex, Heading, Callout, Card, Button } from '@radix-ui/themes';
import { useProfileForm } from '../hooks/useProfileForm';
import { TextFormField } from '../components/TextFormField';
import { BooleanFormField } from '../components/BooleanFormField';
import { UserProfile, UserType } from '@types';
import { RadioCardFormField } from '@components';
import { useCreateProfile } from '../hooks/useCreateProfile';
import { useAuth0 } from '@auth0/auth0-react';

const userTypeOptions = [
  {
    label: 'Landowner',
    value: 'landowner',
    description: 'I am a landowner looking to register one or more properties with CBYC',
  },
  {
    label: 'Forester',
    value: 'forester',
    description:
      'I run a business related to forest management and want to get connected with CBYC',
  },
];

const WelcomeCallout = () => (
  <Callout.Root>
    <Callout.Text>We need some information about you to complete your registration!</Callout.Text>
  </Callout.Root>
);

const ErrorCallout = ({ error }: { error: Error }) => (
  <Callout.Root color="red">
    <Callout.Text>There was an error submitting your registration.</Callout.Text>
    <Callout.Text>{error.message}</Callout.Text>
  </Callout.Root>
);

export const CreateProfile: React.FC = () => {
  const form = useProfileForm();
  const userType = form.watch('user_type');
  const { user } = useAuth0();

  const { mutate, isPending, isError, error } = useCreateProfile({
    onSuccess: () => {},
    onError: () => {},
  });

  const handleSubmit = (data: UserProfile) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, profile: data });
  };

  return (
    <Container>
      <Flex direction={'column'} gap="3">
        <Heading size="9">Complete your profile</Heading>
        <WelcomeCallout />
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Flex direction="column" gap="3">
            <RadioCardFormField
              form={form}
              label="I am a..."
              field="user_type"
              options={userTypeOptions}
            />
            {userType && (
              <Card>
                <Flex direction="column" gap="2" width={{ initial: 'auto', md: '400px' }}>
                  <TextFormField form={form} label="First Name" field="first_name" />
                  <TextFormField form={form} label="Last Name" field="last_name" />
                  <TextFormField form={form} label="Email" field="email" />
                  <TextFormField form={form} label="Phone" field="phone" />
                  <TextFormField form={form} label="Secondary Phone" field="phone_2" />
                  <TextFormField form={form} label="Mailing Address" field="address" />
                  <TextFormField form={form} label="Address Line 2" field="address_2" />
                  <TextFormField form={form} label="City" field="city" />
                  <TextFormField form={form} label="State" field="state" />
                  <TextFormField form={form} label="Zip" field="zip" />
                  {userType === UserType.Forester && (
                    <TextFormField form={form} label="Business Name" field="business_name" />
                  )}
                  <BooleanFormField form={form} label="MFA Member?" field="mfa_member" />
                  <BooleanFormField form={form} label="Mailing List?" field="mailing_list" />
                </Flex>
              </Card>
            )}
            {isError && <ErrorCallout error={error} />}
            <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isPending}>
              Save
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

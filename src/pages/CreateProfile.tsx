import { Flex, Heading, Card, Button } from '@radix-ui/themes';
import { useCreateProfileForm } from '../hooks/useCreateProfileForm';
import { UserProfile } from '@types';
import { InfoCallout, ProfileForm, RadioCardFormField } from '@components';
import { useCreateProfile } from '../hooks/useCreateProfile';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

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

export const CreateProfile: React.FC = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);
  const form = useCreateProfileForm();
  const userType = form.watch('user_type');

  const { mutate, isPending } = useCreateProfile({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully created your profile!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error creating your profile',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleSubmit = (data: UserProfile) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, profile: data });
  };

  return (
    <Flex direction={'column'} gap="3">
      <Heading size="9">Create your profile</Heading>
      <InfoCallout description="We need some information about you to complete your registration!" />
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
              <ProfileForm form={form} userType={userType} />
            </Card>
          )}
          <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isPending}>
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

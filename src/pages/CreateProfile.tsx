import { Flex, Heading, Card, Button } from '@radix-ui/themes';
import { useProfileForm } from '../hooks/useProfileForm';
import { TextFormField } from '../components/TextFormField';
import { BooleanFormField } from '../components/BooleanFormField';
import { UserProfile, UserType } from '@types';
import { InfoCallout, RadioCardFormField } from '@components';
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
  const form = useProfileForm();
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
          <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isPending}>
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

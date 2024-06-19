import { InfoCallout, ProfileForm, RadioCardFormField } from '@components';
import { Button,Card, Flex } from '@radix-ui/themes';

import { useCreateProfileForm } from '../hooks/forms/useCreateProfileForm';

const userTypeOptions = [
  {
    description: 'I am a landowner looking to register one or more properties with CBYC',
    label: 'Landowner',
    value: 'landowner',
  },
  {
    description:
      'I run a business related to forest management and want to get connected with CBYC',
    label: 'Forester',
    value: 'forester',
  },
];

export const CreateProfile: React.FC = () => {
  const { form, onSubmit, isSubmitPending } = useCreateProfileForm();
  const userType = form.watch('user_type');

  return (
    <Flex direction={'column'} gap="3">
      <InfoCallout description="We need some information about you to complete your registration!" />
      <form onSubmit={onSubmit}>
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
          <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isSubmitPending}>
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

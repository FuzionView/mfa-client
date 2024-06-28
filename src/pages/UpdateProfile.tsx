import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Button, Card, Flex } from '@radix-ui/themes';

import { ProfileForm } from '@components';
import { useUpdateProfileForm } from '../hooks/forms/useUpdateProfileForm';
import { useGetUserProfile } from '../hooks/queries/useGetUserProfile';

export const UpdateProfile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError, isPending: isProfilePending } = useGetUserProfile(user?.sub);
  const { form, onSubmit, isSubmitPending } = useUpdateProfileForm(profileData);

  useEffect(() => {
    if (profileData) {
      form.reset(profileData);
    }
  }, [profileData]);

  return (
    <Flex direction={'column'} gap="3">
      {!isError && !isProfilePending && (
        <form onSubmit={onSubmit}>
          <Flex direction="column" gap="3">
            <Card>
              <ProfileForm form={form} userType={profileData?.user_type} />
            </Card>
            <Flex direction="row" style={{ alignSelf: 'flex-end' }} gap="1">
              <Link to="/profile">
                <Button loading={isSubmitPending} color="gray" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" loading={isSubmitPending}>
                Save
              </Button>
            </Flex>
          </Flex>
        </form>
      )}
    </Flex>
  );
};

import { Flex, Heading, Card, Button } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { ProfileForm } from '@components';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { useUpdateProfileForm } from '../hooks/useUpdateProfileForm';
import { useGetUserProfile } from '../hooks/useGetUserProfile';
import { useEffect } from 'react';

export const UpdateProfile: React.FC = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);
  const { data: profileData, isError } = useGetUserProfile(user?.sub);
  const form = useUpdateProfileForm(profileData);

  useEffect(() => {
    if (profileData) {
      form.reset(profileData);
    }
  }, [profileData]);

  const { mutate, isPending } = useUpdateProfile({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully updated your profile!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error updating your profile',
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
      <Heading size="9">Update your profile</Heading>
      {!isError && (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Flex direction="column" gap="3">
            <Card>
              <ProfileForm form={form} userType={profileData?.user_type} />
            </Card>
            <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isPending}>
              Save
            </Button>
          </Flex>
        </form>
      )}
    </Flex>
  );
};

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton, ProfileForm } from '@components';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { useGetUserProfile } from '../hooks/users';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData } = useGetUserProfile(user?.sub);

  // If there is no user data associated with this user ID, then make them
  // complete the profile form
  if (profileData && 'error' in profileData) {
    return <ProfileForm />;
  }

  return (
    <Flex direction="column" p="4">
      <Heading>User Profile</Heading>
      <img src={user?.picture} width="50px" height="50px" />
      <Text>{user?.name}</Text>
      <Text>{user?.email}</Text>
      <LogoutButton />
    </Flex>
  );
};

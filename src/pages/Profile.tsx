import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '@components';
import { Flex, Heading, Text } from '@radix-ui/themes';
import { useGetUserProfile } from '../hooks/users';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError } = useGetUserProfile(user?.sub);
  const navigate = useNavigate();

  // If there is no user data associated with this user ID, then make them
  // complete the profile form
  if ((profileData && 'error' in profileData) || isError) {
    navigate('/create-profile');
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

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '@components';
import { Flex, Heading, Text } from '@radix-ui/themes';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
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

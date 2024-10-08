import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Card, Flex, Heading, Text } from '@radix-ui/themes';

import { LoginButton } from '@components';
import { ProfileButton } from '../components/ProfileButton';

export const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Card>
      <Flex direction="column" align="center" gap="4" p="4">
        <Heading size="9">TimberView</Heading>
        <Text>
          Timberview is a free program for all Minnesota’s family and individual woodland owners who
          want guidance and advice on determining if a woodland timber harvest is the right for
          them. With the support of the Minnesota DNR, the Minnesota Forestry Association provides
          up to a half-day walkthrough of your woods by a professional forester at no cost to you.
        </Text>
        <Flex justify="center">
          {isAuthenticated ? <ProfileButton /> : <LoginButton isLoading={isLoading} />}
        </Flex>
      </Flex>
    </Card>
  );
};

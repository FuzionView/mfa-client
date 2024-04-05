import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '@components';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

import { ProfileButton } from '../components/ProfileButton';

export const Home: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Flex align="center" justify="center" p="4">
      <Card style={{ width: '600px' }}>
        <Flex direction="column" align="center" gap="4" p="4">
          <Heading size="9">Call Before You Cut</Heading>
          <Text>
            Call Before You Cut (CBYC) is a free program for all Minnesota’s family and individual
            woodland owners who want guidance and advice on determining if a woodland timber harvest
            is the right for them. With the support of the Minnesota DNR, the Minnesota Forestry
            Association provides up to a half-day walkthrough of your woods by a professional
            forester at no cost to you.
          </Text>
          <Flex justify="center">{isAuthenticated ? <ProfileButton /> : <LoginButton />}</Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

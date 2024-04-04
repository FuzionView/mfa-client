import React from 'react';
import { LoginButton } from '@components';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

export class Home extends React.Component {
  render() {
    return (
      <Flex align="center" justify="center" p="4">
        <Card style={{ width: '600px' }}>
          <Flex direction="column" justify="center" gap="4" p="4">
            <Heading size="9">Call Before You Cut</Heading>
            <Text>
              Call Before You Cut (CBYC) is a free program for all Minnesota’s family and individual
              woodland owners who want guidance and advice on determining if a woodland timber
              harvest is the right for them. With the support of the Minnesota DNR, the Minnesota
              Forestry Association provides up to a half-day walkthrough of your woods by a
              professional forester at no cost to you.
            </Text>
            <LoginButton />
          </Flex>
        </Card>
      </Flex>
    );
  }
}

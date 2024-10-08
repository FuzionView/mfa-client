import { Helmet } from 'react-helmet';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import { Box, Container, Flex, Heading } from '@radix-ui/themes';

import { LogoutButton } from '@components';

const titles: Record<string, string> = {
  '/': '',
  '/create-profile': 'Create your Profile',
  '/create-property': 'Add a New Property',
  '/forester-property-info/:userId/:propertyId': 'Property Information',
  '/profile': 'Profile',
  '/property-info/:id': 'Property Information',
  '/request-assessment/:id': 'Request Property Assessment',
  '/update-profile': 'Update your Profile',
  '/update-property/:id': 'Update Property',
};

export const Layout = () => {
  const { pathname } = useLocation();
  const titleMatch = Object.entries(titles).find(([path]) => matchPath(path, pathname));
  const title = titleMatch ? titleMatch[1] : '';

  return (
    <Container>
      <Helmet>
        <title>CBYC - {title}</title>
      </Helmet>
      <Flex direction="column" gap="3">
        <Flex direction="row" align="end">
          <Heading size="9">{title}</Heading>
          <Flex flexGrow="1" />
          <LogoutButton />
        </Flex>
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </Container>
  );
};

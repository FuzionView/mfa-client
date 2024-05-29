import { Box, Container, Flex, Heading } from '@radix-ui/themes';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LogoutButton } from '@components';

const titles: Record<string, string> = {
  '/': '',
  '/profile': 'Profile',
  '/create-profile': 'Create your Profile',
  '/update-profile': 'Update your Profile',
  '/create-property': 'Add a New Property',
};

export const Layout = () => {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? '';

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

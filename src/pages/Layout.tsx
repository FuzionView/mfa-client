import { Container, Heading } from '@radix-ui/themes';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const titles: Record<string, string> = {
  '/': '',
  '/profile': 'Profile',
  '/create-profile': 'Create your Profile',
};

export const Layout = () => {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? '';

  return (
    <Container>
      <Helmet>
        <title>CBYC - {title}</title>
      </Helmet>
      <Heading size="9">{title}</Heading>
      <Outlet />
    </Container>
  );
};

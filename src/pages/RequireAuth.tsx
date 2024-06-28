import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Callout } from '@radix-ui/themes';

import { LoginButton } from '@components';
import { LoadingCallout } from '../components/LoadingCallout';

export const RequireAuth: React.FC = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return <LoadingCallout text="Logging in..." />;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  if (error) {
    return <Callout.Root color="red">Error authenticating user</Callout.Root>;
  }

  return <LoginButton />;
};

import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@radix-ui/themes';

export const RequireAuth: React.FC = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Box>Loading</Box>;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Box>Go to Login</Box>;
};

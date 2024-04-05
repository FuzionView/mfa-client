import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@radix-ui/themes';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  const handleLogout = () =>
    logout({
      logoutParams: { returnTo: window.location.origin },
    });

  return (
    <Button size="4" onClick={handleLogout} style={{ maxWidth: '150px' }}>
      Logout
    </Button>
  );
};

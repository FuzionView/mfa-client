import { useAuth0 } from '@auth0/auth0-react';
import { ExitIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

import { useStore } from '../store';

export const LogoutButton: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();
  const addToast = useStore((state) => state.addToast);

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
    addToast({
      intent: 'success',
      message: 'You have been logged out.',
      title: 'Success!',
    });
  };

  if (!isAuthenticated) return null;

  return (
    <Button onClick={handleLogout} style={{ maxWidth: '150px' }}>
      <ExitIcon />
      Logout
    </Button>
  );
};

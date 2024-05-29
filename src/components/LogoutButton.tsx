import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@radix-ui/themes';
import { useStore } from '../store';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  const addToast = useStore((state) => state.addToast);

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
    addToast({
      title: 'Success!',
      message: 'You have been logged out.',
      intent: 'success',
    });
  };

  return (
    <Button size="4" onClick={handleLogout} style={{ maxWidth: '150px' }}>
      Logout
    </Button>
  );
};

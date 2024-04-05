import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@radix-ui/themes';

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const login = () => loginWithRedirect();

  return (
    <Button size="4" onClick={login} style={{ maxWidth: '250px' }}>
      Login or Register
    </Button>
  );
};

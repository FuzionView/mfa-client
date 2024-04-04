import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@radix-ui/themes';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const login = () => loginWithRedirect();

  return (
    <Button size="4" onClick={login}>
      Login or Register
    </Button>
  );
};

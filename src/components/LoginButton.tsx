import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@radix-ui/themes';
import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner';

interface Props {
  isLoading?: boolean;
}

export const LoginButton: React.FC<Props> = ({ isLoading = false }) => {
  const { loginWithRedirect } = useAuth0();

  const login = () => loginWithRedirect();

  if (isLoading) {
    return (
      <Button disabled size="4">
        <LoadingSpinner />
      </Button>
    );
  }

  return (
    <Button size="4" onClick={login} style={{ maxWidth: '250px' }}>
      Login or Register
    </Button>
  );
};

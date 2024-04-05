import { Auth0Provider } from '@auth0/auth0-react';

import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../config';

interface Props {
  children: JSX.Element;
}

export const AuthenticationProvider: React.FunctionComponent<Props> = ({ children }) => {
  const redirectUri = `${window.location.origin}/profile`;

  if (!(AUTH0_DOMAIN && AUTH0_CLIENT_ID && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

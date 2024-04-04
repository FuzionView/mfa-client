import { Auth0Provider } from '@auth0/auth0-react';

interface Props {
  children: JSX.Element;
}

export const AuthenticationProvider: React.FunctionComponent<Props> = ({ children }) => {
  const domain = 'dev-ckd14b4izflc47iw.us.auth0.com';
  const clientId = 'T5Yw47B3a4yn94Miq8DdoRtnwaAZrMSC';
  const redirectUri = window.location.origin;

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

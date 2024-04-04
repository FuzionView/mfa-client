import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthenticationProvider } from '@contexts';
import { Theme } from '@radix-ui/themes';

import { router } from './router.tsx';

import '@radix-ui/themes/styles.css';
import '@styles/main.scss';

// TODO: move tokens to .env file
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <Theme accentColor="grass">
        <RouterProvider router={router} />
      </Theme>
    </AuthenticationProvider>
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { Theme } from '@radix-ui/themes';

import { AuthenticationProvider } from '@contexts';
import { ToastContainer } from './components/Toast/ToastContainer.tsx';
import { queryClient } from './queryClient.ts';
import { router } from './router.tsx';

import '@radix-ui/themes/styles.css';
import '@styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
        <Theme accentColor="grass">
          <RouterProvider router={router} />
          <ToastContainer />
        </Theme>
      </AuthenticationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

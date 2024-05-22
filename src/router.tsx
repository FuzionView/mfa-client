import { createBrowserRouter } from 'react-router-dom';
import { Home, Profile, RequireAuth, CreateProfile } from '@pages';
import { Layout } from './pages/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      { index: true, element: <Home /> },
      {
        element: <RequireAuth />,
        children: [
          {
            element: <Profile />,
            path: '/profile',
          },
          {
            path: '/create-profile',
            element: <CreateProfile />,
          },
        ],
      },
    ],
  },
]);

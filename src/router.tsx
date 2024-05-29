import { createBrowserRouter } from 'react-router-dom';
import { Home, Profile, RequireAuth, CreateProfile, UpdateProfile } from '@pages';
import { Layout } from './pages/Layout';
import { CreateProperty } from './pages/CreateProperty';

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
          {
            path: '/update-profile',
            element: <UpdateProfile />,
          },
          {
            path: '/create-property',
            element: <CreateProperty />,
          },
        ],
      },
    ],
  },
]);

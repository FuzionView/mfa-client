import { createBrowserRouter } from 'react-router-dom';
import { Home, Profile, RequireAuth, CreateProfile } from '@pages';

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
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
    element: <RequireAuth />,
  },
]);

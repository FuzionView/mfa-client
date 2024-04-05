import { createBrowserRouter } from 'react-router-dom';
import { Home, Profile, RequireAuth } from '@pages';

export const router = createBrowserRouter([
  {
    element: <Home />,
    path: '/',
  },
  {
    children: [{ element: <Profile />, path: '/profile' }],
    element: <RequireAuth />,
  },
]);

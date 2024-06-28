import { createBrowserRouter } from 'react-router-dom';

import {
  CreateAssessmentRequest,
  CreateProfile,
  CreateProperty,
  Home,
  Layout,
  Profile,
  RequireAuth,
  UpdateProfile,
  UpdateProperty,
} from '@pages';

export const router = createBrowserRouter([
  {
    children: [
      { element: <Home />, index: true },
      {
        children: [
          {
            element: <Profile />,
            path: '/profile',
          },
          {
            element: <CreateProfile />,
            path: '/create-profile',
          },
          {
            element: <UpdateProfile />,
            path: '/update-profile',
          },
          {
            element: <CreateProperty />,
            path: '/create-property',
          },
          {
            element: <UpdateProperty />,
            path: '/update-property/:propertyId',
          },
          {
            element: <CreateAssessmentRequest />,
            path: '/request-assessment/:propertyId',
          },
        ],
        element: <RequireAuth />,
      },
    ],
    element: <Layout />,
    path: '/',
  },
]);

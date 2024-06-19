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
    element: <Layout />,
    path: '/',
    children: [
      { index: true, element: <Home /> },
      {
        element: <RequireAuth />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
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
          {
            path: '/update-property/:propertyId',
            element: <UpdateProperty />,
          },
          {
            path: '/request-assessment/:propertyId',
            element: <CreateAssessmentRequest />,
          },
        ],
      },
    ],
  },
]);

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/mainLayout';
import { NotFound } from '~/pages/NotFound/notFound';

export const routerShema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export const AppRouter = () => <RouterProvider router={routerShema} />;

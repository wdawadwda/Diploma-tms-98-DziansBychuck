import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { SubscribeForm } from '~/features/Form/SubscribeForm/subscribeForm';
import { MainLayout } from '~/layouts/MainLayout/mainLayout';
import { NotFound } from '~/pages/NotFound/notFound';

export const routerShema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <SubscribeForm />
      },
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

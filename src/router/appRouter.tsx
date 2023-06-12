import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/mainLayout';
import { NewPassword } from '~/pages/From/NewPassword/newPass';
import { RegistrAuth } from '~/pages/From/RegistrAuth/registrAuth';
import { ResetPassword } from '~/pages/From/ResetPassword/resetPass';
import { HomePage } from '~/pages/Home/home';
import { NotFoundPage } from '~/pages/NotFound/notFound';

export const routerShema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: `registration-authentication`,
        element: <RegistrAuth />
      },
      {
        path: `reset_password`,
        Component: ResetPassword
      },
      {
        path: `new_password`,
        element: <NewPassword />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export const AppRouter = () => <RouterProvider router={routerShema} />;

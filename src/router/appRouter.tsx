import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/mainLayout';
import { NewPassword } from '~/pages/From/NewPassword/newPass';
import { RegistrAuth } from '~/pages/From/RegistrAuth/registrAuth';
import { ResetPassword } from '~/pages/From/ResetPassword/resetPass';
import { SuccessPage } from '~/pages/From/SuccessPage/SuccessPage';
import { HomePage } from '~/pages/Home/home';
import { NotFoundPage } from '~/pages/NotFound/notFound';
import { fetchUser } from '~/store/api/fetchUser/fetchUser.api';
import { useAppDispatch, useAppSelector } from '~/store/store.types';
import { selectTokens, selectUser } from '~/store/user/user.selectors';

const PublicOnlyRoute = () => {
  const user = useSelector(selectUser);

  return user ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <Outlet />
  );
};

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
        element: <PublicOnlyRoute />,
        children: [
          {
            path: 'registration-authentication',
            element: <RegistrAuth />
          }
        ]
      },
      {
        path: `reset_password`,
        Component: ResetPassword
      },
      {
        path: '/activate/:uid/:token',
        element: <SuccessPage />
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

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);
  useEffect(() => {
    if (tokens) {
      const promise = dispatch(fetchUser());

      return () => {
        promise.abort('cancelled');
      };
    }
  }, [dispatch, tokens]);

  return <RouterProvider router={routerShema} />;
};

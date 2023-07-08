import { useEffect, useState } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/MainLayout';
import { AccountPage } from '~/pages/From/AccountPage/AccountPage';
import { NewPassword } from '~/pages/From/NewPassword/NewPass';
import { RegistrAuth } from '~/pages/From/RegistrAuth/RegistrAuth';
import { ResetPassword } from '~/pages/From/ResetPassword/ResetPass';
import { SuccessPage } from '~/pages/From/SuccessPage/SuccessPage';
import { HomePage } from '~/pages/Home/Home';
import { NotFoundPage } from '~/pages/NotFound/NotFound';
import { fetchUser } from '~/store/api/fetchUser/fetchUser.api';
import { useAppDispatch, useAppSelector } from '~/store/store.types';
import { selectTokens } from '~/store/user/user.selectors';

import { AccessControlRoute } from './routerUtils';

export const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        element: <AccessControlRoute isPublicOnly={true} />,
        children: [
          {
            path: 'registration-authentication',
            element: <RegistrAuth />
          },
          {
            path: '/activate/:uid/:token',
            element: <SuccessPage />
          }
        ]
      },
      {
        element: <AccessControlRoute isProtected={true} />,
        children: [
          {
            path: 'account',
            Component: AccountPage
          }
        ]
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

export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector(selectTokens);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (tokens) {
      const fetchData = async () => {
        await dispatch(fetchUser());
        setIsLoading(false);
      };

      void fetchData();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, tokens]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RouterProvider router={routerSchema} />
      )}
    </>
  );
};

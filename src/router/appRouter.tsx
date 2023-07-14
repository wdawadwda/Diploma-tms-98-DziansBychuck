import { useEffect, useState } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '~/layouts/MainLayout/MainLayout';
import { AccountPage } from '~/pages/Account/AccountPage/AccountPage';
import { EditProfilePage } from '~/pages/Account/EditProfilePage/EditProfilePage';
import { BookDetail } from '~/pages/BookDetail/BookDetail';
import { FavoritesPage } from '~/pages/Favorites/FavoritesPage';
import { RegistrAuth } from '~/pages/From/RegistrAuth/RegistrAuth';
import { ResetPassword } from '~/pages/From/ResetPassword/ResetPass';
import { SuccessPage } from '~/pages/From/SuccessPage/SuccessPage';
import { HomePage } from '~/pages/Home/Home';
import { Loader } from '~/pages/Loader/Loader';
import { NotFoundPage } from '~/pages/NotFound/NotFound';
import { SearchPage } from '~/pages/SearchPage/SearchPage';
import { fetchUser } from '~/store/api/fetchUser/fetchUser.api';
import { useAppDispatch, useAppSelector } from '~/store/store.types';
import { selectTokens } from '~/store/user/user.selectors';

import { AccessControlRoute } from './router.utils';

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
          },
          {
            path: `reset_password`,
            Component: ResetPassword
          }
        ]
      },
      {
        element: <AccessControlRoute isProtected={true} />,
        children: [
          {
            path: 'account',
            Component: AccountPage
          },
          {
            path: 'account/editProfile',
            element: <EditProfilePage />
          },
          {
            path: 'favorites',
            element: <FavoritesPage />
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            element: <SearchPage />
          },
          {
            path: ':query',
            children: [
              {
                path: ':page',
                element: <SearchPage />
              }
            ]
          }
        ]
      },
      {
        path: 'book/:isbn13',
        element: <BookDetail />
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
    <>{isLoading ? <Loader /> : <RouterProvider router={routerSchema} />}</>
  );
};

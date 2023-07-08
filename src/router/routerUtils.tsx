import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectUser } from '~/store/user/user.selectors';

export const ProtectedRoute = () => {
  const user = useSelector(selectUser);
  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
};

export const PublicOnlyRoute = () => {
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

export const AccessControlRoute = ({
  isProtected = false,
  isPublicOnly = false
}) => {
  const user = useSelector(selectUser);

  if (user && isProtected) {
    return <Outlet />;
  }

  if (!user && isPublicOnly) {
    return <Outlet />;
  }

  return (
    <Navigate
      to="/"
      replace
    />
  );
};

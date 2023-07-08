import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { selectUser } from '~/store/user/user.selectors';

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

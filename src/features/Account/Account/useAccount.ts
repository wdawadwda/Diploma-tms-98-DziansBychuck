import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUser } from '~/store/user/user.selectors';
import { userActions } from '~/store/user/user.slice';

export const useAccountSettings = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const handleUpdateProfile = () => {
    navigate('/account/editProfile');
  };

  return {
    user,
    handleLogout,
    handleUpdateProfile
  };
};

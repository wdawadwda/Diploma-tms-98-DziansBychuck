import { useNavigate } from 'react-router-dom';

export const useNav = () => {
  const navigate = useNavigate();

  const handleRedirectToRegistration = () => {
    navigate('/registration-authentication');
  };

  const handleRedirectToAccount = () => {
    navigate('/account');
  };

  const handleRedirectToFavorites = () => {
    navigate('/favorites');
  };

  const handleRedirectToCart = () => {
    navigate('/cart');
  };

  const handleSignIn = () => {
    navigate('/registration-authentication'); // Вызываем функцию для перехода на указанный путь
  };

  return {
    navigate,
    handleRedirectToRegistration,
    handleRedirectToAccount,
    handleRedirectToFavorites,
    handleRedirectToCart,
    handleSignIn
  };
};

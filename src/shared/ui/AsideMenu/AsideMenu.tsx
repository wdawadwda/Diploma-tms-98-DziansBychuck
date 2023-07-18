import { useEffect } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { useNav } from '~/entities/use/useNav';
import { SearchBar } from '~/features/SearchBar/SearchBar';
import { navbarActions } from '~/store/navbar/navbar.slice';
import { type RootState } from '~/store/store.types';
import { selectUser } from '~/store/user/user.selectors';
import { userActions } from '~/store/user/user.slice';

import Style from './asideMenu.module.scss';
import { Button } from '../Button/Buttons';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const AsideMenu = () => {
  const {
    handleRedirectToFavorites,
    handleRedirectToCart,
    handleSignIn,
    handleRedirectToAccount
  } = useNav();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const isShowAside = useSelector(
    (state: RootState) => state.navbar.isShowAside
  );
  const handleToggleAside = () => {
    dispatch(navbarActions.toggleAside());
  };

  useEffect(() => {
    document.body.style.overflow = isShowAside ? 'hidden' : 'auto';
  }, [isShowAside]);

  return (
    <>
      {isShowAside && (
        <div className={Style.asideMenuContainer}>
          <Button
            appearance="secondary2"
            isFullWidth={false}
            onClick={handleToggleAside}
            contentLeft={<FontAwesomeIcon icon={faX} />}
          />
          <div className={Style.asideMenuNav}>
            <SearchBar toggleAside={handleToggleAside} />
            {user && (
              <Button
                isFullWidth={true}
                appearance="primary"
                onClick={() => {
                  handleRedirectToAccount();
                  handleToggleAside();
                }}
              >
                Account
              </Button>
            )}

            {user ? (
              <>
                <Button
                  isFullWidth={true}
                  appearance="primary"
                  onClick={() => {
                    handleRedirectToFavorites();
                    handleToggleAside();
                  }}
                >
                  Favorites
                </Button>
                <Button
                  isFullWidth={true}
                  appearance="primary"
                  onClick={() => {
                    handleRedirectToCart();
                    handleToggleAside();
                  }}
                >
                  Cart
                </Button>
                <div className={Style.themeSwitcherWrapper}>
                  <ThemeSwitcher />
                </div>
              </>
            ) : null}
          </div>

          {user ? (
            <div>
              <Button
                isFullWidth={true}
                appearance="primary"
                onClick={() => {
                  handleLogout();
                  handleToggleAside();
                }}
              >
                logout
              </Button>
            </div>
          ) : (
            <div>
              <Button
                isFullWidth={true}
                appearance="primary"
                onClick={() => {
                  handleSignIn();
                  handleToggleAside();
                }}
              >
                Sign-in/Sign Up
              </Button>
            </div>
          )}
        </div>
      )}
      {isShowAside && (
        <div
          className={Style.layout}
          onClick={handleToggleAside}
        ></div>
      )}
    </>
  );
};

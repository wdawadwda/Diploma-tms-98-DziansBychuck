import { useEffect } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import { useNav } from '~/entities/use/useNav';
import { useAside } from '~/entities/use/useShowAside';
import { SearchBar } from '~/features/SearchBar/SearchBar';
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

  const { isShowAside, toggleAside } = useAside(true);

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
            onClick={toggleAside}
            contentLeft={<FontAwesomeIcon icon={faX} />}
          />
          <div className={Style.asideMenuNav}>
            <SearchBar toggleAside={toggleAside} />
            {user && (
              <Button
                isFullWidth={true}
                appearance="primary"
                onClick={() => {
                  handleRedirectToAccount();
                  toggleAside();
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
                    toggleAside();
                  }}
                >
                  Favorites
                </Button>
                <Button
                  isFullWidth={true}
                  appearance="primary"
                  onClick={() => {
                    handleRedirectToCart();
                    toggleAside();
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
                  toggleAside();
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
                  toggleAside();
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
          onClick={toggleAside}
        ></div>
      )}
    </>
  );
};

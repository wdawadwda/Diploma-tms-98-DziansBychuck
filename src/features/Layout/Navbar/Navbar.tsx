import { useEffect, useState } from 'react';

import {
  faBars,
  faCartShopping,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { useNav } from '~/entities/use/useNav';
import { useWindowSize } from '~/entities/use/useWindowSize';
import { AsideMenu } from '~/shared/ui/AsideMenu/AsideMenu';
import { Button } from '~/shared/ui/Button/Buttons';
import { navbarActions } from '~/store/navbar/navbar.slice';
import { type RootState } from '~/store/store.types';
import { selectUser } from '~/store/user/user.selectors';

import { NavLinks } from './navbar.constants';
import Style from './navbar.module.scss';
import { SearchBar } from '../../SearchBar/SearchBar';
import StyleLayout from '../layout.module.scss';

export const Navbar = () => {
  const user = useSelector(selectUser);
  const {
    handleRedirectToRegistration,
    handleRedirectToAccount,
    handleRedirectToFavorites,
    handleRedirectToCart
  } = useNav();

  const { width } = useWindowSize();
  const isSmallScreen = width <= 1200;

  const isShowAside = useSelector(
    (state: RootState) => state.navbar.isShowAside
  );

  const bodyOverflow = useSelector(
    (state: RootState) => state.navbar.bodyOverflow
  );

  const dispatch = useDispatch();

  const handleToggleAside = () => {
    if (isShowAside) {
      dispatch(navbarActions.setBodyOverflow({ bodyOverflow: 'auto' }));
    } else {
      dispatch(navbarActions.setBodyOverflow({ bodyOverflow: 'hidden' }));
    }
    dispatch(navbarActions.toggleAside());
  };

  const [iconColor, setIconColor] = useState(
    user ? 'inherit' : 'var(--book--btn-text-color)'
  );

  useEffect(() => {
    setIconColor(user ? 'inherit' : 'var(--book--btn-text-color)');
  }, [user]);

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  return (
    <div
      className={classNames({
        [Style.container]: true,
        [StyleLayout.container]: true
      })}
    >
      <NavLink to={`${NavLinks[0].path}`}>{`${NavLinks[0].title}`}</NavLink>

      {!isSmallScreen && (
        <div className={Style.formContainer}>
          <div className={Style.formContainer}>
            <SearchBar />
          </div>
        </div>
      )}

      <div className={Style.iconContainer}>
        {isSmallScreen ? (
          <>
            <Button
              appearance="secondary2"
              contentLeft={<FontAwesomeIcon icon={faCartShopping} />}
              onClick={
                user ? handleRedirectToCart : handleRedirectToRegistration
              }
            />
            <Button
              appearance="secondary2"
              contentLeft={<FontAwesomeIcon icon={faBars} />}
              onClick={handleToggleAside}
            />
          </>
        ) : (
          <>
            <Button
              appearance="secondary2"
              contentLeft={<Heart />}
              onClick={
                user ? handleRedirectToFavorites : handleRedirectToRegistration
              }
            />
            <Button
              appearance="secondary2"
              contentLeft={<FontAwesomeIcon icon={faCartShopping} />}
              onClick={
                user ? handleRedirectToCart : handleRedirectToRegistration
              }
            />
            <Button
              appearance="secondary2"
              contentLeft={
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: iconColor }}
                  onClick={
                    user
                      ? handleRedirectToAccount
                      : handleRedirectToRegistration
                  }
                  onMouseEnter={() => {
                    if (!user) {
                      setIconColor('var(--book--primary-color)');
                    }
                  }}
                  onMouseLeave={() => {
                    if (!user) {
                      setIconColor('var(--book--btn-text-color)');
                    }
                  }}
                />
              }
            />
          </>
        )}
      </div>
      {isShowAside && <AsideMenu />}
    </div>
  );
};

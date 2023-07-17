import {
  faBars,
  faCartShopping,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { useNav } from '~/entities/use/useNav';
import { useAside } from '~/entities/use/useShowAside';
import { useWindowSize } from '~/entities/use/useWindowSize';
import { AsideMenu } from '~/shared/ui/AsideMenu/AsideMenu';
import { Button } from '~/shared/ui/Button/Buttons';
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

  const { isShowAside, toggleAside } = useAside(false);

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
              onClick={toggleAside}
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
                  onClick={
                    user
                      ? handleRedirectToAccount
                      : handleRedirectToRegistration
                  }
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

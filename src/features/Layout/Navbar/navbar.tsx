import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { Button } from '~/shared/ui/Button/Button';

import { NavLinks } from './navbar.constants';
import Style from './navbar.module.scss';
import { SearchBar } from '../../SearchBar/SearchBar';
import StyleLayout from '../layout.module.scss';

export const Navbar = () => {
  return (
    <div
      className={classNames({
        [Style.container]: true,
        [StyleLayout.container]: true
      })}
    >
      <NavLink to={`${NavLinks[0].path}`}>{`${NavLinks[0].title}`}</NavLink>
      <div className={Style.formContainer}>
        <SearchBar />
      </div>
      <div className={Style.iconContainer}>
        <Button
          appearance="secondary2"
          contentLeft={<Heart />}
        ></Button>
        <Button
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faCartShopping} />}
        ></Button>
        <Button
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faUser} />}
        ></Button>
      </div>
    </div>
  );
};

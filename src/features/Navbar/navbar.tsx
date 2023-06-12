import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { Button } from '~/shared/ui/Button/button';

import Style from './navbar.module.scss';
import { SearchBar } from '../SearchBar/searchBar';

export const Navbar = () => {
  return (
    <div className={Style.container}>
      <span>BOOKSTORE</span>
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

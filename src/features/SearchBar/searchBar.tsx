import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '~/shared/ui/Button/button';

import Style from './searchBar.module.scss';

export const SearchBar = () => {
  return (
    <form
      className={Style.container}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="Search"
      />
      <Button
        appearance="secondary2"
        contentLeft={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        type="submit"
      ></Button>
    </form>
  );
};

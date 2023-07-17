import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { FavoritesContetnt } from '~/features/Content/FavoritesContent/FavoritesContetnt';
import { Button } from '~/shared/ui/Button/Buttons';

import Style from './favoritesPage.module.scss';
import Styles from '../page.module.scss';

export const FavoritesPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={Style.favoritesPageContainer}>
      <div className={Style.btnWrapper}>
        <Button
          appearance="secondary2"
          onClick={goBack}
          contentLeft={<FontAwesomeIcon icon={faArrowLeft} />}
        ></Button>
      </div>
      <div className={Styles.title}>Favorites</div>
      <FavoritesContetnt />
    </div>
  );
};

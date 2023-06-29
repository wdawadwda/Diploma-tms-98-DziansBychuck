import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Style from './notFounde.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={Style.container}>
      <FontAwesomeIcon icon={faFaceFrown} />
      <h2>404</h2>
      <h3>Page not found</h3>
    </div>
  );
};

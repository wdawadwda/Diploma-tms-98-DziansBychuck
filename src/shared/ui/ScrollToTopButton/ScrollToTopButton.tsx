import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Style from './scrollToTopButton.module.scss';
import { handleScrollToTop } from './scrollToTopButton.utils';
import { Button } from '../Button/Button';

export const ScrollToTopButton = () => {
  return (
    <div className={Style.scrollToTopButtonWrapper}>
      <Button
        isFullWidth={false}
        appearance="primary"
        className="scroll-to-top-button"
        onClick={handleScrollToTop}
        contentLeft={<FontAwesomeIcon icon={faArrowUp} />}
      ></Button>
    </div>
  );
};

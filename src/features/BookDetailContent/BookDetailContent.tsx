import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { ReactComponent as Facebook } from '~/assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '~/assets/icons/twitter.svg';
import { getRandomColor } from '~/entities/utils';
import { Button } from '~/shared/ui/Button/Button';
import { RatingButton } from '~/shared/ui/RatingButton/RatingButton';
import { Tabs } from '~/shared/ui/Tabs/Tabs';
import { useTabs } from '~/shared/ui/Tabs/useTabs';

import Style from './bookDetCont.module.scss';
import { type FormState, type BookDetail, tabs } from './bookDetCont.type';
import { getActiveForm } from './bookDetCont.utils';
import { SubscribeForm } from '../Form/SubscribeForm/SubscribeForm';

export const BookDetailContent = ({
  bookDetail
}: {
  bookDetail: BookDetail;
}) => {
  const { activeTab, handleTabClick } = useTabs<FormState>(tabs[0]);

  const activeForm: JSX.Element | null = getActiveForm(activeTab, bookDetail);

  return (
    <div className={Style.bookDetailContentContainer}>
      <div className={Style.title}>{bookDetail.title}</div>
      <div className={Style.innerWrapper}>
        <div className={Style.imageWrapper}>
          <img
            style={{
              backgroundColor: getRandomColor()
            }}
            src={bookDetail.image}
            className={Style.image}
          />
          <Button
            isFullWidth={false}
            appearance="secondary"
            className={Style.imageButton}
            contentLeft={<Heart />}
          ></Button>
        </div>
        <div className={Style.detail}>
          <div className={Style.priceWrapper}>
            <div className={Style.price}>{bookDetail.price}</div>
            <RatingButton isbn13={bookDetail.isbn13} />
          </div>
          <div className={Style.detailContent}>
            <div>
              <span className={Style.contentLight}>Authors:</span>{' '}
              <span>{bookDetail.authors}</span>
            </div>
            <div>
              <span className={Style.contentLight}>Publisher:</span>{' '}
              <span>{bookDetail.publisher}</span>
            </div>
            <div>
              <span className={Style.contentLight}>Language:</span>{' '}
              <span>{bookDetail.language}</span>
            </div>
          </div>
          <div className={Style.cardWrapper}>
            <Button
              isFullWidth={true}
              appearance="primary"
            >
              add to cart
            </Button>
            <a href={bookDetail.url}>Preview book</a>
          </div>
        </div>
      </div>
      <div className={Style.tabs}>
        <Tabs
          activeTab={activeTab}
          tabs={tabs}
          handleTabClick={handleTabClick}
        />
        {activeForm}
      </div>
      <div className={Style.social}>
        <Button
          isFullWidth={false}
          appearance="secondary2"
          contentLeft={<Facebook />}
        ></Button>
        <Button
          isFullWidth={false}
          appearance="secondary2"
          contentLeft={<Twitter />}
        ></Button>
        <Button
          isFullWidth={false}
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faEllipsis} />}
        ></Button>
      </div>
      <SubscribeForm />
    </div>
  );
};

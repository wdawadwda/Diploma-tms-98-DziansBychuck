import { useSelector } from 'react-redux';

import { getRandomColor } from '~/entities/utils';
import { LikeButton } from '~/shared/ui/LikeButton/Like';
import { RatingButton } from '~/shared/ui/RatingButton/RatingButton';
import { type RootState } from '~/store/store.types';

import Style from './favoritesContetnt.module.scss';

export const FavoritesContetnt = () => {
  const likes = useSelector((state: RootState) => state.books.likes);

  const likedBooks = Object.values(likes).map((likedBook) => {
    return Object.values(likedBook)[0];
  });

  return (
    <div className={Style.favoritesContainer}>
      {likedBooks.map((book) => (
        <div
          key={book.isbn13}
          className={Style.bookContainer}
        >
          <img
            style={{
              backgroundColor: getRandomColor()
            }}
            src={book.image}
            alt={book.title}
          />
          <div className={Style.contentCenter}>
            <div className={Style.title}>{book.title}</div>
            <div className={Style.subtitle}>{book.subtitle}</div>
            <div className={Style.priceWrapper}>
              <div className={Style.price}>{book.price}</div>
              <RatingButton isbn13={book.isbn13} />
            </div>
          </div>
          <div className={Style.like}>
            <LikeButton bookDetail={book} />
          </div>
        </div>
      ))}
    </div>
  );
};

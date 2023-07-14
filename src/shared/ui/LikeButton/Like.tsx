import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Heart } from '~/assets/icons/Buttons/heart.svg';
import { bookActions } from '~/store/book/book.slice';
import { type RootState } from '~/store/store.types';

import Style from './like.module.scss';
import { type LikeButtonProperties } from './like.type';

export const LikeButton = ({ bookDetail }: LikeButtonProperties) => {
  const dispatch = useDispatch();

  const isLiked = useSelector((state: RootState) =>
    state.books.likes.some((likedBook) => likedBook[bookDetail.isbn13])
  );

  const handleLikeClick = () => {
    dispatch(bookActions.setBookLiked(bookDetail));
  };

  return (
    <button
      className={classNames({
        [Style.likeButton]: true,
        [Style.liked]: isLiked
      })}
      onClick={handleLikeClick}
    >
      <Heart />
    </button>
  );
};

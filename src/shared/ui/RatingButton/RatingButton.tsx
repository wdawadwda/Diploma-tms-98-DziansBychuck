import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Style from './rating.module.scss';
import { useRatingButton } from './useRatingButton';

export const RatingButton = ({ isbn13 }: { isbn13: string }) => {
  const {
    hoveredRating,
    selectedRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick
  } = useRatingButton(isbn13);

  const stars = Array.from({ length: 5 }, (_, index) => {
    const starRating = index + 1;
    const isFilled =
      starRating <= selectedRating || starRating <= hoveredRating;

    return (
      <button
        key={index}
        onMouseEnter={() => handleMouseEnter(starRating)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(starRating)}
        className={`${Style.starButton} ${isFilled ? Style.filledStar : ''}`}
      >
        <FontAwesomeIcon icon={faStar} />
      </button>
    );
  });

  return <div className={Style.rating}>{stars}</div>;
};

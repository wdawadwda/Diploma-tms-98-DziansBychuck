import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { bookActions } from '~/store/book/book.slice';
import { type Rating } from '~/store/book/book.type';

import { type RatingButtonHook } from './Rating.type';

export const useRatingButton = (isbn13: string): RatingButtonHook => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(() => {
    const storedRatings: Rating[] = JSON.parse(
      localStorage.getItem('bookRatings') || '[]'
    ) as Rating[];
    const rating = storedRatings.find((rating) => rating.isbn13 === isbn13);
    return rating ? rating.selectedRating : 0;
  });
  const dispatch = useDispatch();

  const handleMouseEnter = (hoveredRating: number): void => {
    setHoveredRating(hoveredRating);
  };

  const handleMouseLeave = (): void => {
    setHoveredRating(0);
  };

  const handleClick = (selectedRating: number): void => {
    setSelectedRating(selectedRating);
    dispatch(bookActions.setBookSelectedRating({ isbn13, selectedRating }));
    console.warn('Selected rating:', selectedRating);
    console.warn('Selected rating:', isbn13);
  };

  return {
    hoveredRating,
    selectedRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick
  };
};

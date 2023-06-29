import { useState } from 'react';

import { type RatingButtonHook } from './RatingButton.type';

export const useRatingButton = (): RatingButtonHook => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseEnter = (hoveredRating: number): void => {
    setHoveredRating(hoveredRating);
  };

  const handleMouseLeave = (): void => {
    setHoveredRating(0);
  };

  const handleClick = (selectedRating: number): void => {
    setSelectedRating(selectedRating);
    console.warn('Selected rating:', selectedRating);
  };

  return {
    hoveredRating,
    selectedRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick
  };
};

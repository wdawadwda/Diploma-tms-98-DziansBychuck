export interface RatingButtonHook {
  hoveredRating: number;
  selectedRating: number;
  handleMouseEnter: (hoveredRating: number) => void;
  handleMouseLeave: () => void;
  handleClick: (selectedRating: number) => void;
}

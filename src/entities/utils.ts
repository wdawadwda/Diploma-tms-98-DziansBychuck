export const getRandomColor = () => {
  const colors = [
    'var(--book--background-primary-img-color)',
    'var(--book--background-secondary-img-color)',
    'var(--book--background-secondary2-img-color)'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

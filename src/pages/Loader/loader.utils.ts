export const getLoaderSize = () => {
  const screenWidth = window.innerWidth;
  let newSize = 150;

  if (screenWidth <= 700) {
    newSize = 50;
  } else if (screenWidth <= 1200) {
    newSize = 70;
  }

  return newSize;
};

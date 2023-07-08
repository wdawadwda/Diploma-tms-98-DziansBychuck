export const getLoaderSize = () => {
  const screenWidth = window.innerWidth;
  let newSize = 150;

  if (screenWidth <= 1000) {
    newSize = 100;
  } else if (screenWidth <= 1024) {
    newSize = 125;
  }

  return newSize;
};

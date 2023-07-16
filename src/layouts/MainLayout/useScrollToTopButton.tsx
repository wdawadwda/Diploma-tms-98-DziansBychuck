import { useState, useEffect, useRef } from 'react';

export const useScrollToTopButton = () => {
  const [isShowScrollButton, setShowScrollButton] = useState(false);
  const mainReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainReference.current) {
        const mainTopPosition =
          mainReference.current.getBoundingClientRect().top;
        setShowScrollButton(mainTopPosition < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isShowScrollButton, mainReference };
};

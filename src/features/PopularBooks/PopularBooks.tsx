import { useState } from 'react';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '~/shared/ui/Button/Button';
import { useGetBooksQuery } from '~/store/api/book/book.api';

import Style from './popelarBooks.module.scss';
import { ListContent } from '../Content/ListContent/ListContent';

export const PopularBooks = () => {
  const { data } = useGetBooksQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const books = data?.books ?? [];
  const displayedBooks = books.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 >= books.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(books.length - 3);
    } else {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <>
      <span className={Style.title}>Popular Books</span>
      <div className={Style.prevNext}>
        <Button
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={handlePrevious}
        ></Button>
        <Button
          appearance="secondary2"
          contentLeft={<FontAwesomeIcon icon={faArrowRight} />}
          onClick={handleNext}
        ></Button>
      </div>
      <div className={Style.popularBooksContainer}>
        {books.length === 0 ? (
          <div className={Style.loading}>Loading...</div>
        ) : (
          <ListContent books={displayedBooks} />
        )}
      </div>
    </>
  );
};

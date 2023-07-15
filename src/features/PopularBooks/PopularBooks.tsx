import { useState } from 'react';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '~/shared/ui/Button/Button';
import { useGetBooksQuery } from '~/store/api/book/book.api';

import Style from './popelarBooks.module.scss';
import { type PopularBooksProperties } from './popularBooks.type';
import { ListContent } from '../Content/ListContent/ListContent';

export const PopularBooks = ({ startIndex, title }: PopularBooksProperties) => {
  const { data } = useGetBooksQuery();
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const books = data?.books ?? [];
  const displayedBooks = books.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    const nextIndex = currentIndex + 3;
    if (nextIndex >= books.length) {
      setCurrentIndex(startIndex);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    const previousIndex = currentIndex - 3;
    if (previousIndex < startIndex) {
      const lastPageStartIndex = Math.floor((books.length - 1) / 3) * 3;
      setCurrentIndex(lastPageStartIndex);
    } else {
      setCurrentIndex(previousIndex);
    }
  };

  return (
    <>
      <span className={Style.title}>{title}</span>
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

import { useNavigate } from 'react-router-dom';

import { type Book } from '~/entities/books.type';
import { getRandomColor } from '~/entities/utils';
import { RatingButton } from '~/shared/ui/RatingButton/RatingButton';

import Style from './listContent.module.scss';

export const ListContent = ({ books }: { books: Book[] }) => {
  const navigate = useNavigate();

  const navigateToBookDetail = (isbn13: string) => {
    navigate(`/book/${isbn13}`);
  };

  return (
    <>
      {books.map((book) => (
        <div
          className={Style.contentContainer}
          key={book.isbn13}
        >
          <img
            onClick={() => navigateToBookDetail(book.isbn13)}
            src={
              book.image ||
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQBAAYFB//EADkQAAICAQIEBAMEBwkAAAAAAAABAgMRBCEFEjFRE0FhcYGRsRQiQsEGIzIzUqHRFVNicnOCg9LT/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EACERAQEAAQIGAwAAAAAAAAAAAAABAhMxAxEyQWGxEiFi/9oADAMBAAIRAxEAPwDzxuDUgkjogKidyjFENRATyGqA9QDVYEvh+hvhlXh+hvhgSeGZ4foV+Gc68LIEnIY4lLgA4gI5TsDXEFoBZprOA6KGRQMB0UB0YjIxNjEbGIAqO/cNQ9A4wz2GqGXsgE8uxvIsD+T4G8ixjG4E8q8PD6guHsUuHfuC4ASuAuUSqUffIuUQJZRFyRTKImSARJGYDkjANgPghNaKa0AyEc7joR6AxiPguwHRj5jYxOS3yMisMAVHpv7mqP3dg0urC5e4CeXCBcR/KC0seoEzQqcSlx7dRU1tkCWcRMkVSSEWICWxADLAACrKayetFNYFEV6j4LYTBFEPLv7AMW42H7XNu8+eBa6YGxTxtuB0dt84Nx026hcvK15P18jo+aABoFrrjI3Dz0y89sgNY3a2YCZLbAqQ6XsKmBPYu5PYU2E9gEtgsZaLAOoqrJaiqsCmBRDpuTwH174XcBy2+Q5Qy8OPnjYZoNBqta/D0unstae7isJe76I+5V+iGvlFysnpqnjo5t4+SwZcpNyS18CKwk8xz79DW1nzy90+3Y+pruA67Qxc3WroKO7qecfDZ9+581/dXVuMsrOPoJZTlyBJYXk/qmZjdtdN0t8eR9bRcA12uxNRjVDO0rNsr2Lbf0P1vInTqtPPH4XlfkZ8o3lXlpbbp/IVPtg+pxPhut0EUtVprK61+NJOL7brb57ny7MY9SmJ7CewomT2AS2ixlosA6iqolqGqV6adcK36TbA+rotLLUSWZxrrzvOb2+Hc9Boo8H0STdctZd3sf3fhGOf5nllxPjCSUPsiS6fq1/Q6XEf0jmsR1VMV2isfREXHO91TLGdnuJ8c10ocmmpnXBdFXVypHzr+KXt/r9VXH/PqFn6njb6+N6j99bp5+9tv5SJ/wCy+MdY26WL/wBW/wD7k6Pn2rV8PaV8cvonzVamEl2jYpr4oZ9q0krftvhrs6NknZ1+XmeIhwvjXiVzlfo/utPbxMtdsuTLpafi7t51fBQ/uk4cnt+7z/MaWU6a2Z4Xqj0lvHLtRPN2phFP+KxQXwQyriM85p1VEn/h1EU/qeMu4Zxmy6c1dooqUm0uWzKXupIFcK4sv2rtI/8Adf8A+g0P0y8Xw/R6ONcRrjhxttg9nsrES6yfC9Ym9RoXp7X+OmLrfyaweHho+LVNShqdNBr+GV35zLK9V+kNK24hQ/eE39ZCcGzbL2y8WXfH0s12kVTcqLFdUvPGGvdZPm2D3xLj349bpX/wP+pJOWpnJyulQ2+vJBr8zrJZPuotl2hNosZYLA2tlMGSReBsZAWQkPjMgjMbGwC+MxkZkKtDVoFymdzkauN8UCtzBcyXxQXb6gPlMVOYp2i5WAHKYiyRkpipSAGbBMkzMgAmGpAnAGp+oSsFHeQFCt9TfH9ScwCrx/U37R6khzAq+0epjv8AUmOAe7vUF25FHAG7AXIw4DmzjggP/9k='
            }
            alt={book.title || 'No Title'}
            style={{
              backgroundColor: getRandomColor()
            }}
          />
          <span
            className={Style.title}
            onClick={() => navigateToBookDetail(book.isbn13)}
          >
            {book.title || 'No Title'}
          </span>
          <span
            className={Style.subtitle}
            onClick={() => navigateToBookDetail(book.isbn13)}
          >
            {book.subtitle || 'No Subtitle'}
          </span>
          <div className={Style.additionally}>
            <span className={Style.price}>{book.price || 'No Price'}</span>
            <RatingButton isbn13={book.isbn13} />
          </div>
        </div>
      ))}
    </>
  );
};

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type Book } from '~/entities/books.type';

import { type BooksState, type Rating } from './book.type';

let storedRatings: Rating[] = [];

const storedRatingsString = localStorage.getItem('bookRatings');
if (storedRatingsString) {
  storedRatings = JSON.parse(storedRatingsString) as Rating[];
}

const initialState: BooksState = {
  books: [],
  ratings: storedRatings
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setBookSelectedRating: (
      state,
      action: PayloadAction<{ isbn13: string; selectedRating: number }>
    ) => {
      const { isbn13, selectedRating } = action.payload;
      const book = state.books.find((book) => book.isbn13 === isbn13);
      if (book) {
        book.selectedRating = selectedRating;
        const storedRatings: Rating[] = JSON.parse(
          localStorage.getItem('bookRatings') || '[]'
        ) as Rating[];
        const updatedRatings: Rating[] = storedRatings.filter(
          (rating) => rating.isbn13 !== isbn13
        );
        updatedRatings.push({ isbn13, selectedRating });
        localStorage.setItem('bookRatings', JSON.stringify(updatedRatings));
      }
    }
  }
});

export const { actions: bookActions } = booksSlice;

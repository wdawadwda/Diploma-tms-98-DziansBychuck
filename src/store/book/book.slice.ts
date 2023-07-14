import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type BookDetail, type Book } from '~/entities/books.type';

import { type BooksState, type Rating } from './book.type';

let storedRatings: Rating[] = [];

const storedRatingsString = localStorage.getItem('bookRatings');
if (storedRatingsString) {
  storedRatings = JSON.parse(storedRatingsString) as Rating[];
}

let storedLikes: { [isbn13: string]: BookDetail }[] = [];

const storedLikesString = localStorage.getItem('bookLikes');
if (storedLikesString) {
  storedLikes = JSON.parse(storedLikesString) as {
    [isbn13: string]: BookDetail;
  }[];
}

const initialState: BooksState = {
  books: [],
  total: '',
  ratings: storedRatings,
  likes: storedLikes
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    setTotal: (state, action: PayloadAction<string>) => {
      state.total = action.payload;
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
    },
    setBookLiked: (state, action: PayloadAction<BookDetail>) => {
      const book = action.payload;
      const likedBookIndex = state.likes.findIndex(
        (likedBook) => likedBook[book.isbn13]
      );
      if (likedBookIndex === -1) {
        state.likes.push({ [book.isbn13]: book });
      } else {
        state.likes.splice(likedBookIndex, 1);
      }
      localStorage.setItem('bookLikes', JSON.stringify(state.likes));
    }
  }
});

export const { actions: bookActions } = booksSlice;

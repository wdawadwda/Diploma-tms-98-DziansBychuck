import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type BookDetail, type Book } from '~/entities/books.type';

import { type BookCartDetail, type BooksState, type Rating } from './book.type';

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

let storedBookCart: BookCartDetail[] = [];

const storedBookCartString = localStorage.getItem('bookCart');
if (storedBookCartString) {
  storedBookCart = JSON.parse(storedBookCartString) as BookCartDetail[];
} else {
  storedBookCart = [];
  localStorage.setItem('bookCart', JSON.stringify(storedBookCart));
}

const initialState: BooksState = {
  books: [],
  total: '',
  ratings: storedRatings,
  likes: storedLikes,
  bookCart: storedBookCart
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
    },
    setBookCart: (state, action: PayloadAction<BookDetail[]>) => {
      const booksToAdd = action.payload;
      for (const book of booksToAdd) {
        const existingBook = state.bookCart.find(
          (cartItem) => cartItem.isbn13 === book.isbn13
        );
        if (existingBook) {
          existingBook.quantity += 1;
        } else {
          state.bookCart.push({ ...book, quantity: 1 });
        }
      }
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    removeBookFromCart: (state, action: PayloadAction<string>) => {
      const isbn13 = action.payload;
      state.bookCart = state.bookCart.filter((book) => book.isbn13 !== isbn13);
      const storedBookCart = JSON.parse(
        localStorage.getItem('bookCart') || '[]'
      ) as BookCartDetail[];
      const updatedBookCart = storedBookCart.filter(
        (book) => book.isbn13 !== isbn13
      );
      localStorage.setItem('bookCart', JSON.stringify(updatedBookCart));
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const isbn13 = action.payload;
      const book = state.bookCart.find((book) => book.isbn13 === isbn13);
      if (book && book.quantity > 0) {
        book.quantity--;
        if (book.quantity === 0) {
          state.bookCart = state.bookCart.filter(
            (book) => book.isbn13 !== isbn13
          );
        }
        localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const isbn13 = action.payload;
      const book = state.bookCart.find((book) => book.isbn13 === isbn13);
      if (book) {
        book.quantity++;
        localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
      }
    },
    clearCart: (state) => {
      state.bookCart = [];
      localStorage.removeItem('bookCart');
    }
  }
});

export const { actions: bookActions } = booksSlice;

import { type BookDetail, type Book } from '~/entities/books.type';

export interface BookRating {
  [isbn13: string]: number;
}

export interface Rating {
  isbn13: string;
  selectedRating: number;
}

export interface BooksState {
  books: Book[];
  total?: string;
  ratings: Rating[];
  likes: LikedBooks;
  bookCart: BookCartDetail[];
}

export type LikedBooks = Array<{ [isbn13: string]: BookDetail }>;

export interface BookCartDetail extends BookDetail {
  quantity: number;
}

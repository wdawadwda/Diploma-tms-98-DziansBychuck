import { type Book } from '~/entities/books.type';

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
}

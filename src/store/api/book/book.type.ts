import { type Book } from '~/entities/books.type';

export interface BookResponse {
  total?: string;
  page?: string;
  books: Book[];
}

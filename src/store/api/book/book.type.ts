import { type Book } from '~/entities/books.type';

export interface BookResponse {
  total?: string;
  page?: string;
  books: Book[];
}

export interface BookDetailsResponse {
  authors: string;
  desc: string;
  error: string;
  image: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pages: string;
  price: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  url: string;
  year: string;
}

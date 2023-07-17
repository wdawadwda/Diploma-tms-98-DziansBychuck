import { type BookDetailsResponse } from '~/store/api/book/book.type';

export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  selectedRating?: number;
}

export type BookDetail = BookDetailsResponse;

import { type BookDetailsResponse } from '~/store/api/book/book.type';

export type BookDetail = BookDetailsResponse;

export const tabs = ['Description', 'Authors', 'Reviews'];

export type FormState = (typeof tabs)[number];

import { type BookCartDetail } from '~/store/book/book.type';

export const bookCart: BookCartDetail[] = [
  {
    isbn13: '9781234567890',
    isbn10: '1234567890',
    title: 'Book 1',
    price: '$10',
    quantity: 2,
    authors: 'Author 1',
    desc: 'Description of Book 1',
    error: '',
    image: 'book1.jpg',
    language: 'English',
    pages: '200',
    publisher: 'Publisher 1',
    rating: '4.5',
    subtitle: 'Subtitle of Book 1',
    url: 'https://example.com/book1',
    year: '2022'
  },
  {
    isbn13: '9780987654321',
    isbn10: '123456723890',
    title: 'Book 2',
    price: '$20',
    quantity: 3,
    authors: 'Author 2',
    desc: 'Description of Book 2',
    error: '',
    image: 'book2.jpg',
    language: 'English',
    pages: '300',
    publisher: 'Publisher 2',
    rating: '4.8',
    subtitle: 'Subtitle of Book 2',
    url: 'https://example.com/book2',
    year: '2021'
  },
  {
    isbn13: '9785432109876',
    isbn10: '123452367890',
    title: 'Book 3',
    price: '$15',
    quantity: 1,
    authors: 'Author 3',
    desc: 'Description of Book 3',
    error: '',
    image: 'book3.jpg',
    language: 'English',
    pages: '250',
    publisher: 'Publisher 3',
    rating: '4.2',
    subtitle: 'Subtitle of Book 3',
    url: 'https://example.com/book3',
    year: '2023'
  }
];

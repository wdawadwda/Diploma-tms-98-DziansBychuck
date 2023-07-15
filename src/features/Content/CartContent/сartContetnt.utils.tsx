import { type BookCartDetail } from '~/store/book/book.type';

export const calculateTotalAmount = (bookCart: BookCartDetail[]): number => {
  return bookCart.reduce(
    (total, book) =>
      total + Number.parseFloat(book.price.replace('$', '')) * book.quantity,
    0
  );
};

export const calculateTotalWithVAT = (
  totalAmount: number,
  vat: number
): string => {
  const totalWithVAT = totalAmount + vat;
  return `$ ${totalWithVAT.toFixed(2)}`;
};

export const calculateTotalPrice = (book: BookCartDetail): string => {
  const priceWithoutSymbol = book.price.replace('$', '');
  const price = Number.parseFloat(priceWithoutSymbol);
  return (price * book.quantity).toFixed(2);
};

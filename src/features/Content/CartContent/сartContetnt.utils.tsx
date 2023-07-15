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

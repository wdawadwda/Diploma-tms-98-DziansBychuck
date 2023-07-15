import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getRandomColor } from '~/entities/utils';
import { Button } from '~/shared/ui/Button/Button';
import { bookActions } from '~/store/book/book.slice';
import { type RootState } from '~/store/store.types';

import { VAT } from './cartContent.const';
import Style from './cartContetn.module.scss';
import {
  calculateTotalAmount,
  calculateTotalWithVAT
} from './сartContetnt.utils';

export const CartContetnt = () => {
  const dispatch = useDispatch();
  const bookCart = useSelector((state: RootState) => state.books.bookCart);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveBook = (isbn13: string) => {
    dispatch(bookActions.removeBookFromCart(isbn13));
  };

  const handleDecreaseQuantity = (isbn13: string) => {
    dispatch(bookActions.decreaseQuantity(isbn13));
  };

  const handleIncreaseQuantity = (isbn13: string) => {
    dispatch(bookActions.increaseQuantity(isbn13));
  };

  const handleCheckOut = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOrderPlaced(true);
      dispatch(bookActions.clearCart());
    }, 5000);
  };

  if (isOrderPlaced) {
    return (
      <div className={Style.cartContetntContainer}>
        <div>Заказ успешно оформлен</div>
      </div>
    );
  }

  return (
    <div className={Style.cartContetntContainer}>
      {bookCart.map((book) => (
        <div
          key={book.isbn13}
          className={Style.bookContainer}
        >
          <img
            style={{
              backgroundColor: getRandomColor()
            }}
            src={book.image}
            alt={book.title}
          />
          <div className={Style.contentCenter}>
            <div className={Style.title}>{book.title}</div>
            <div className={Style.subtitle}>{book.subtitle}</div>
            <div className={Style.quantityWrapper}>
              <Button
                appearance="secondary2"
                isFullWidth={false}
                onClick={() => handleDecreaseQuantity(book.isbn13)}
              >
                -
              </Button>
              <div className={Style.quantity}>{book.quantity}</div>
              <Button
                appearance="secondary2"
                isFullWidth={false}
                onClick={() => handleIncreaseQuantity(book.isbn13)}
              >
                +
              </Button>
            </div>
          </div>
          <div className={Style.dell}>
            <div className={Style.dellInner}>
              <div className={Style.price}>{book.price}</div>
              <Button
                appearance="secondary2"
                isFullWidth={false}
                onClick={() => handleRemoveBook(book.isbn13)}
              >
                X
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className={Style.orderWrapper}>
        <div className={Style.order}>
          <div className={Style.text}>Sum total</div>
          <div>{`$ ${calculateTotalAmount(bookCart).toFixed(2)}`}</div>
        </div>
        <div className={Style.order}>
          <div className={Style.text}>VAT</div>
          <div>{`$ ${VAT.toFixed(2)}`}</div>
        </div>
        <div className={Style.order}>
          <div className={Style.total}>Total:</div>
          <div className={Style.total}>
            {calculateTotalWithVAT(calculateTotalAmount(bookCart), VAT)}
          </div>
        </div>
        <Button
          appearance="primary"
          isFullWidth={true}
          onClick={handleCheckOut}
          disabled={isLoading}
        >
          {isLoading ? 'Оформляем...' : 'check out'}
        </Button>
      </div>
    </div>
  );
};

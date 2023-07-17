import { test, expect } from 'vitest';

import { calculateTotalPrice } from '~/features/Content/CartContent/сartContetnt.utils';

import { bookCart } from './test.const';

test('calculateTotalPrice returns the correct total price', () => {
  // Возьмем первую книгу из тестовых данных, чтобы протестировать функцию
  const book = bookCart[0];

  const expectedTotalPrice = '20.00';

  const totalPrice = calculateTotalPrice(book);

  expect(totalPrice).toEqual(expectedTotalPrice);
});

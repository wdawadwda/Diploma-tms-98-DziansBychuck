import { test, expect } from 'vitest';

import { calculateTotalAmount } from '~/features/Content/CartContent/сartContetnt.utils';

import { bookCart } from './test.const';

test('calculateTotalAmount returns the correct total amount', () => {
  const expectedTotalAmount = 95;

  const totalAmount = calculateTotalAmount(bookCart);

  expect(totalAmount).toEqual(expectedTotalAmount);
});

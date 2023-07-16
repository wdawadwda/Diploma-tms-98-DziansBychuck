import { test, expect } from 'vitest';

import { calculateTotalWithVAT } from '~/features/Content/CartContent/сartContetnt.utils';

test('calculateTotalWithVAT returns the correct total with VAT', () => {
  const totalAmount = 125;
  const vat = 25;

  const expectedTotalWithVAT = '$ 150.00';

  const totalWithVAT = calculateTotalWithVAT(totalAmount, vat);

  expect(totalWithVAT).toEqual(expectedTotalWithVAT);
});

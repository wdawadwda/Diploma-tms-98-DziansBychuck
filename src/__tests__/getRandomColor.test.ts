import { test, expect } from 'vitest';

import { getRandomColor } from '~/entities/utils';

test('getRandomColor returns a valid color from the array', () => {
  const colors = [
    'var(--book--background-primary-img-color)',
    'var(--book--background-secondary-img-color)',
    'var(--book--background-secondary2-img-color)'
  ];
  const result = getRandomColor();
  expect(colors).toContain(result);
});

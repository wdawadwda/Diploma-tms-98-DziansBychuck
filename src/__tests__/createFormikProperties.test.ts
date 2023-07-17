import { test, expect } from 'vitest';

import { createFormikProperties } from '~/features/Form/FormUtils';
import {
  confirmPasswordValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passwordValidationSchema
} from '~/features/Form/validation';

test('createFormikProperties returns the correct initialValues', () => {
  const fields = {
    name: nameValidationSchema,
    email: emailValidationSchema,
    password: passwordValidationSchema,
    confirmPassword: confirmPasswordValidationSchema
  };

  const result = createFormikProperties(fields);

  expect(result.initialValues).toEqual({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  expect(result.validateOnChange).toBe(true);
  expect(result.validateOnBlur).toBe(true);

  expect(result.validationSchema).toBeDefined();
  expect(result.validationSchema.fields).toEqual({
    name: nameValidationSchema,
    email: emailValidationSchema,
    password: passwordValidationSchema,
    confirmPassword: confirmPasswordValidationSchema
  });
});

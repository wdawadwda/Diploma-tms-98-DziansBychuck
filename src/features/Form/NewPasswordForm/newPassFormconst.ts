import * as Yup from 'yup';

import {
  confirmPasswordValidationSchema,
  passwordValidationSchema
} from '../validation';

export const formikPropertiesSubscribe = {
  initialValues: {
    password: '',
    confirmPassword: '',
    isValid: false,
    dirty: false
  },
  validationSchema: Yup.object({
    password: passwordValidationSchema,
    confirmPassword: confirmPasswordValidationSchema
  }),
  validateOnChange: true,
  validateOnBlur: true
};

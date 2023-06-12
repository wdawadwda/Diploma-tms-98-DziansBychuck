import * as Yup from 'yup';

import {
  confirmPasswordValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passwordValidationSchema
} from '../validation';

export const formikPropertiesSubscribe = {
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isValid: false,
    dirty: false
  },
  validationSchema: Yup.object({
    name: nameValidationSchema,
    email: emailValidationSchema,
    password: passwordValidationSchema,
    confirmPassword: confirmPasswordValidationSchema
  }),
  validateOnChange: true,
  validateOnBlur: true
};

import { useState } from 'react';

import { type FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { type FormValues } from '../form.type';
import { emailValidationSchema } from '../validation';

export const formikPropertiesSubscribe = {
  initialValues: {
    email: '',
    isValid: false,
    dirty: false
  },
  validationSchema: Yup.object({
    email: emailValidationSchema
  }),
  validateOnChange: true,
  validateOnBlur: true
};

export const useHandleFormSubmit = (): [
  string,
  (values: FormValues, formikBag: FormikHelpers<FormValues>) => Promise<void>
] => {
  const [status, setStatus] = useState('idle');

  const handleFormSubmit = async (
    values: FormValues,
    formikBag: FormikHelpers<FormValues>
  ) => {
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const shouldError = Math.random() < 0.5;

    if (shouldError) {
      setStatus('error');
      formikBag.resetForm();
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } else {
      console.warn(values);
      setStatus('success');
      formikBag.resetForm();
    }
  };

  return [status, handleFormSubmit];
};

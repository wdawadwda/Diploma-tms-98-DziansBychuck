import { useEffect, useState } from 'react';

import { type AxiosError } from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { Button } from '~/shared/ui/Button/Button';
import { resetPasswordFetch } from '~/store/api/fetchUser/fetchUser.api';

import { formSchema } from './form.schema';
import { formikPropertiesResetPass } from './resetPassForm.const';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

export const ResetPasswordForm = () => {
  const abortController = new AbortController();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isResetSuccessful, setIsResetSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (values: FormValues) => {
    const { email } = values;
    try {
      if (email === undefined) {
        throw new Error('email не могут быть undefined');
      } else {
        await resetPasswordFetch({ email }, abortController.signal);
        setIsResetSuccessful(true);
      }
    } catch (error) {
      setErrorMessage((error as AxiosError).message);
    }
  };
  useEffect(() => {
    let redirectTimer: number;
    if (isResetSuccessful) {
      redirectTimer = window.setTimeout(() => {
        navigate('/registration-authentication');
      }, 5000);
    }

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [isResetSuccessful, navigate]);

  return (
    <div className={Styles.formСontainer}>
      <div className={Styles.title}>new password</div>
      <Formik
        {...formikPropertiesResetPass}
        onSubmit={handleFormSubmit}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form>
            {errorMessage && (
              <div className={Styles.detailСontainer}>
                <span className={Styles.detail}>{errorMessage}</span>
              </div>
            )}
            {isResetSuccessful && (
              <div className={Styles.detailСontainer}>
                <span className={Styles.detail}>Проверьте ваш email</span>
              </div>
            )}
            {formSchema.map((field) => (
              <div
                className={Styles.field}
                key={field.name}
              >
                <label htmlFor={field.name}>{`${field.label} *`}</label>
                <Field
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                />
                <ErrorMessage
                  className={Styles.errorMessage}
                  name={field.name}
                  component="div"
                />
              </div>
            ))}
            <Button
              isFullWidth={true}
              appearance="primary"
              type="submit"
              disabled={!isDirty || !isValid || isResetSuccessful}
            >
              reset
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

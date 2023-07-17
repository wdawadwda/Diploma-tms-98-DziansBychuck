import { useState } from 'react';

import { type AxiosError } from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Button';
import { setPasswordFetch } from '~/store/api/fetchUser/fetchUser.api';
import { useAppDispatch } from '~/store/store.types';
import { userActions } from '~/store/user/user.slice';

import { formSchemaSetPassword } from './form.schema';
import { formikPropertiesSetEmail } from './setPassword.const';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

export const SetPassword = ({ signal }: { signal: AbortSignal }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (values: FormValues) => {
    const { new_password, current_password } = values;
    try {
      if (current_password !== undefined && new_password !== undefined) {
        await setPasswordFetch(
          {
            current_password,
            new_password
          },
          signal
        );
        dispatch(userActions.logout());
      } else {
        throw new Error(
          'Значения current_password и new_password не могут быть undefined'
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage((error as AxiosError).message);
    }
  };

  return (
    <div className={Styles.formСontainer}>
      <Formik
        {...formikPropertiesSetEmail}
        onSubmit={handleFormSubmit}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form>
            {errorMessage && (
              <div className={Styles.detailСontainer}>
                <span className={Styles.detail}>{errorMessage}</span>
              </div>
            )}
            {formSchemaSetPassword.map((field) => (
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
              disabled={!isDirty || !isValid}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { useState } from 'react';

import { type AxiosError } from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Buttons';
import { setEmailFetch } from '~/store/api/fetchUser/fetchUser.api';
import { useAppDispatch } from '~/store/store.types';
import { userActions } from '~/store/user/user.slice';

import { formSchemaSetEmail } from './form.schema';
import { formikPropertiesSetEmail } from './setEmail.const';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

export const SetEmail = ({ signal }: { signal: AbortSignal }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = async (values: FormValues) => {
    const { current_password, new_email } = values;
    try {
      if (current_password !== undefined && new_email !== undefined) {
        await setEmailFetch(
          {
            current_password,
            new_email
          },
          signal
        );
        dispatch(userActions.logout());
      } else {
        throw new Error(
          'Значения current_password и new_email не могут быть undefined'
        );
      }
    } catch (error) {
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
            {formSchemaSetEmail.map((field) => (
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
              Change email
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

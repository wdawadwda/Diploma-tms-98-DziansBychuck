import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Button';
import { useCreateTokensMutation } from '~/store/api/user/user.api';
import { useAppDispatch, useAppSelector } from '~/store/store.types';
import { selectTokens } from '~/store/user/user.selectors';
import { userActions } from '~/store/user/user.slice';

import { formSchema } from './form.schema';
import { formikPropertiesSignIn } from './signInForm.const';
import Style from './signInForm.module.scss';
import { type CustomErrorSignIn } from './signInForm.type';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

export const SignInForm = () => {
  const tokens = useAppSelector(selectTokens);
  const dispatch = useAppDispatch();
  const [createTokensMutation, { isLoading, error }] =
    useCreateTokensMutation();
  const customError = error as CustomErrorSignIn;
  const handleFormSubmit = async ({ email, password }: FormValues) => {
    try {
      if (email && password) {
        const response = await createTokensMutation({ email, password });
        if ('data' in response) {
          const jwt = response.data;
          dispatch(userActions.setTokens(jwt));
        } else {
          throw new Error('Response data not found');
        }
      } else {
        throw new Error('email, password not found');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (tokens) {
    window.location.reload();
    return null;
  }

  return (
    <div className={Styles.formСontainer}>
      {error && (
        <div className={Styles.detailСontainer}>
          <span
            className={Styles.detail}
          >{`${customError.status} ${customError.data.detail}`}</span>
        </div>
      )}
      <Formik
        {...formikPropertiesSignIn}
        onSubmit={handleFormSubmit}
      >
        {({ dirty: isDirty, isValid }) => (
          <Form>
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
            <a className={Style.resetLink}>Forgot password ?</a>
            <Button
              isFullWidth={true}
              appearance="primary"
              type="submit"
              disabled={!isDirty || !isValid || isLoading}
            >
              sign in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

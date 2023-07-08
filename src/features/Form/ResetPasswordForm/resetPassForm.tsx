import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/button';

import { formSchema } from './form.schema';
import { formikPropertiesResetPass } from './resetPassForm.const';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

const handleFormSubmit = ({ email }: FormValues) => {
  console.warn('Form values:', { email });
};

export const ResetPasswordForm = () => {
  return (
    <div className={Styles.formСontainer}>
      <div className={Styles.title}>new password</div>
      <Formik
        {...formikPropertiesResetPass}
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
            <Button
              isFullWidth={true}
              appearance="primary"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              reset
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from '~/shared/ui/Button/Buttons';

import { formSchema } from './form.schema';
import { formikPropertiesNewPass } from './newPassForm.const';
import Styles from '../form.module.scss';
import { type FormValues } from '../form.type';

const handleFormSubmit = ({ password, confirmPassword }: FormValues) => {
  console.warn('Form values:', { password, confirmPassword });
};

export const NewPasswordForm = () => {
  return (
    <div className={Styles.formСontainer}>
      <div className={Styles.title}>reset password</div>
      <Formik
        {...formikPropertiesNewPass}
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
              set password
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

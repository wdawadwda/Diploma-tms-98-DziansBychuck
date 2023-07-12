import * as Yup from 'yup';

const commonPasswords = [
  'password',
  '123456',
  'qwerty',
  'letmein',
  'admin',
  'login',
  'pass1234',
  '123abc',
  'test123',
  'welcome',
  'password123',
  'abc123',
  'changeme',
  'hello123',
  'iloveyou',
  'sunshine'
];

export const searchValidationSchema = Yup.string()
  .required('Введите значение для поиска')
  .min(1, 'Минимальная длина запроса должна быть не менее 3 символов');

export const emailValidationSchema = Yup.string()
  .email('Неверный адрес электронной почты')
  .required('Заполните поле');

export const nameValidationSchema = Yup.string()
  .required('Заполните поле')
  .min(3, 'Минимальная длина поля должна быть не менее 3 символов');

export const passwordValidationSchema = Yup.string()
  .required('Заполните поле')
  .min(6, 'Минимальная длина поля должна быть не менее 6 символов')
  .matches(/[a-z]/, 'Поле должно содержать хотя бы одну маленькую букву')
  .matches(/[A-Z]/, 'Поле должно содержать хотя бы одну большую букву')
  .matches(/^[\dA-Za-z]*$/, 'Поле не должно содержать специальные символы')
  .matches(
    /^(?!.*(.).*\1).*$/,
    'Поле не должно содержать повторяющиеся символы'
  )
  .notOneOf(
    commonPasswords,
    'Пароль не может быть стандартным простым паролем'
  );

export const confirmPasswordValidationSchema = Yup.string()
  .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
  .required('Заполните поле');

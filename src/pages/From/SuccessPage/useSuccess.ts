import { useEffect, useRef } from 'react';

import { useParams } from 'react-router-dom';

import { useActivateEmailMutation } from '~/store/api/user/user.api';

import { type CustomErrorSuccess } from './successError.type';

export const useSuccessPage = () => {
  const { uid, token } = useParams<{ uid: string; token: string }>();

  const [activateEmail, { isLoading, isSuccess, error }] =
    useActivateEmailMutation();
  const customError = error as CustomErrorSuccess;
  const isMutationExecutedReference = useRef(false);

  useEffect(() => {
    if (
      !isMutationExecutedReference.current &&
      uid !== undefined &&
      token !== undefined
    ) {
      isMutationExecutedReference.current = true;
      activateEmail({ uid, token }).catch((error) => {
        console.error('Ошибка при активации электронной почты:', error);
      });
    }
  }, [uid, token, activateEmail]);

  return { isLoading, isSuccess, customError };
};

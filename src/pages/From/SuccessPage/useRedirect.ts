import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const useRedirect = (path: string, delay: number) => {
  const navigate = useNavigate();
  const [isRedirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isRedirect) {
      navigate(path, { replace: true });
    }
  }, [isRedirect, navigate, path]);

  return null;
};

import { useCallback } from 'react';

export const useValidation = () => {
  const isEmailValid = useCallback((email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }, []);

  const isAgeValid = useCallback((age) => {
    const parsedAge = parseInt(age);
    return !isNaN(parsedAge) && parsedAge >= 18 && parsedAge <= 130;
  }, []);

  return { isEmailValid, isAgeValid };
};

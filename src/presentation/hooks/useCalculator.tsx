import {useState} from 'react';

export const useCalculator = () => {
  const [operation, setOperation] = useState('0');

  const buildOperation = (number: string) => {
    if (operation.includes('.') && number === '.') {
      return;
    }

    if (operation.startsWith('0') || operation.startsWith('-0')) {
      if (number === '.') {
        return setOperation(operation + number);
      }

      if (number === '0' && !operation.includes('.')) {
        return;
      }

      if (
        operation.startsWith('0') &&
        number !== '.' &&
        operation.length === 1 &&
        number !== '0'
      ) {
        return setOperation(number);
      }
    }
    setOperation(operation + number);
  };

  return {
    operation,
    buildOperation,
  };
};

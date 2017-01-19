import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const isEven = (num) => {
  const result = num % 2 === 0;
  return result;
};

export const getYesNoAnswer = () => {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return getYesNoAnswer();
};

export const checkYesNoAnswer = (str, num) => {
  if (str === 'yes') {
    return isEven(num) === true;
  }
  return isEven(num) === false;
};

export const defineMathAction = () => {
  const number = getRandom(1, 4);
  if (number === 1) {
    return '+';
  }
  if (number === 2) {
    return '-';
  }
  if (number === 3) {
    return '*';
  }
  return '/';
};

export const defCalcValue = () => {
  const number1 = getRandom(1, 20);
  const number2 = getRandom(1, 20);
  const defAction = defineMathAction();

  if (defAction === '/' && number1 % number2 !== 0) {
    return defCalcValue();
  }

  const numbers = pairs.cons(number1, number2);
  const result = pairs.cons(defAction, numbers);
  return result;
};

export const getNumberAnswer = () => {
  const result = parseFloat(readlineSync.question('Your answer: '));
  if (isNaN(result)) {
    return getNumberAnswer();
  }
  return result;
};

export const calcValue = (data) => {
  const number1 = pairs.car(pairs.cdr(data));
  const number2 = pairs.cdr(pairs.cdr(data));
  const action = pairs.car(data);
  if (action === '+') {
    return number1 + number2;
  }
  if (action === '-') {
    return number1 - number2;
  }
  if (action === '*') {
    return number1 * number2;
  }
  return number1 / number2;
};

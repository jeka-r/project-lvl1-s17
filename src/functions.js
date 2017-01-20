import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const makeGreeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const isEven = num => num % 2 === 0;

export const askYesNoAnswer = () => {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return askYesNoAnswer();
};

export const checkYesNoAnswer = (str, num) => {
  if (str === 'yes') {
    return isEven(num);
  }
  return !isEven(num);
};

export const chooseMathOperator = () => {
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
  const operator = chooseMathOperator();

  if (operator === '/' && number1 % number2 !== 0) {
    return defCalcValue();
  }

  const numbers = cons(number1, number2);
  const result = cons(operator, numbers);
  return result;
};

export const askNumberAnswer = () => {
  const result = parseFloat(readlineSync.question('Your answer: '));
  if (isNaN(result)) {
    return askNumberAnswer();
  }
  return result;
};

export const calcValue = (data) => {
  const number1 = car(cdr(data));
  const number2 = cdr(cdr(data));
  const operator = car(data);
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }
  return number1 / number2;
};

export const defGcdValue = () => {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const numbers = cons(number1, number2);
  return numbers;
};

export const calcGcdValue = (data) => {
  const number1 = car(data);
  const number2 = cdr(data);
  if (number2 - number1 === 0) {
    return number1;
  }

  if (number1 > number2) {
    return calcGcdValue(cons(number2, number1 - number2));
  }
  return calcGcdValue(cons(number1, number2 - number1));
};

import { cons, car, cdr } from 'hexlet-pairs';
import { getRandom, askNumberAnswer } from '../utils';
import gamesProcess from '../general-logic';

function getGcdValue() {
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const numbers = cons(number1, number2);
  return numbers;
}

function calcGcdValue(data) {
  const number1 = car(data);
  const number2 = cdr(data);
  if (number2 - number1 === 0) {
    return number1;
  }

  if (number1 > number2) {
    return calcGcdValue(cons(number2, number1 - number2));
  }
  return calcGcdValue(cons(number1, number2 - number1));
}

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  const getValue = () => getGcdValue();

  const getQuestion = (value) => {
    const number1 = car(value);
    const number2 = cdr(value);
    return `${number1} ${number2}`;
  };

  const askAnswer = () => askNumberAnswer();

  const check = (answer, value) => {
    const calculatedValue = calcGcdValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gameDescription, getValue, getQuestion, askAnswer, check));
};

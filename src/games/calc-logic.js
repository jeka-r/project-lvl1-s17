import { cons, car, cdr } from 'hexlet-pairs';
import { getRandom, askNumberAnswer, makeGreeting } from '../utils';
import gamesProcess from '../general-logic';

function chooseMathOperator() {
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
}

function defCalcValue() {
  const number1 = getRandom(1, 20);
  const number2 = getRandom(1, 20);
  const operator = chooseMathOperator();

  if (operator === '/' && number1 % number2 !== 0) {
    return defCalcValue();
  }
  const numbers = cons(number1, number2);
  const result = cons(operator, numbers);
  return result;
}

function calcValue(data) {
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
}

export default () => {
  const gameDescription = 'What is the result of the expression?';

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => defCalcValue();

  const defQuestionAnswer = (value) => {
    const number1 = car(cdr(value));
    const number2 = cdr(cdr(value));
    const operator = car(value);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    return askNumberAnswer();
  };

  const defCheck = (answer, value) => {
    const calculatedValue = calcValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

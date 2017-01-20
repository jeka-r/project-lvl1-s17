import { cons, car, cdr } from 'hexlet-pairs';
import { getRandom, askNumberAnswer, makeGreeting } from '../utils';
import gamesProcess from '../general-logic';

function defGcdValue() {
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

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => defGcdValue();

  const defQuestionAnswer = (value) => {
    const number1 = car(value);
    const number2 = cdr(value);
    console.log(`Question: ${number1} ${number2}`);
    return askNumberAnswer();
  };

  const defCheck = (answer, value) => {
    const calculatedValue = calcGcdValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

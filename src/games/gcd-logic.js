import { cons } from 'hexlet-pairs';
import getRandom from '../utils';
import gamesProcess from '../general-logic';

function calcGcdValue(number1, number2) {
  if (number2 - number1 === 0) {
    return number1;
  }

  if (number1 > number2) {
    return calcGcdValue(number2, number1 - number2);
  }
  return calcGcdValue(number1, number2 - number1);
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';

  function generation() {
    const number1 = getRandom(1, 100);
    const number2 = getRandom(1, 100);
    const question = `${number1} ${number2}`;
    const calculatedValue = calcGcdValue(number1, number2);
    return cons(calculatedValue, question);
  }
  console.log(gamesProcess(description, generation));
};

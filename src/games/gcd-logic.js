import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { defGcdValue, askNumberAnswer, calcGcdValue } from '../functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const currentValue = defGcdValue();
    const number1 = car(currentValue);
    const number2 = cdr(currentValue);

    console.log(`Question: ${number1} ${number2}`);
    const answer = askNumberAnswer();
    const calculatedValue = calcGcdValue(currentValue);

    if (calculatedValue === answer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return `Let's try again, ${actual}!`;
  };
  console.log(iter(1));
};

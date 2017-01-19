import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';
import * as funcs from './functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const currentValue = funcs.defGcdValue();
    const number1 = pairs.car(currentValue);
    const number2 = pairs.cdr(currentValue);

    console.log(`Question: ${number1} ${number2}`);
    const answer = funcs.getNumberAnswer();
    const calculatedValue = funcs.calcGcdValue(currentValue);

    if (calculatedValue === answer) {
      console.log('Correct!');
      const newAcc = acc + 1;
      return iter(newAcc);
    }

    return `Let's try again, ${actual}!`;
  };
  return iter(1);
};

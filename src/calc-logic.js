import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';
import * as funcs from './functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const currentValue = funcs.defCalcValue();
    const number1 = pairs.car(pairs.cdr(currentValue));
    const number2 = pairs.cdr(pairs.cdr(currentValue));
    const action = pairs.car(currentValue);

    console.log(`Question: ${number1} ${action} ${number2}`);
    const answer = funcs.getNumberAnswer();
    const calculatedValue = funcs.calcValue(currentValue);

    if (calculatedValue === answer) {
      console.log('Correct!');
      const newAcc = acc + 1;
      return iter(newAcc);
    }

    return `Let's try again, ${actual}!`;
  };
  return iter(1);
};

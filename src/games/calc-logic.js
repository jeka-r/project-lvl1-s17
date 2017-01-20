import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { defCalcValue, askNumberAnswer, calcValue } from '../functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const currentValue = defCalcValue();
    const number1 = car(cdr(currentValue));
    const number2 = cdr(cdr(currentValue));
    const action = car(currentValue);

    console.log(`Question: ${number1} ${action} ${number2}`);
    const answer = askNumberAnswer();
    const calculatedValue = calcValue(currentValue);

    if (calculatedValue === answer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return `Let's try again, ${actual}!`;
  };
  console.log(iter(1));
};

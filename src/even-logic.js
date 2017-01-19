import readlineSync from 'readline-sync';
import * as funcs from './functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const number = funcs.getRandom(1, 20);

    console.log('Question:', number);
    const answer = funcs.getYesNoAnswer();

    if (funcs.checkYesNoAnswer(answer, number) === true) {
      console.log('Correct!');
      const newAcc = acc + 1;
      return iter(newAcc);
    }

    return `Let's try again, ${actual}!`;
  };
  return iter(1);
};

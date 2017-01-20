import readlineSync from 'readline-sync';
import { getRandom, askYesNoAnswer, checkYesNoAnswer } from '../functions';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const number = getRandom(1, 20);

    console.log('Question:', number);
    const answer = askYesNoAnswer();

    if (checkYesNoAnswer(answer, number)) {
      console.log('Correct!');
      return iter(acc + 1);
    }

    return `Let's try again, ${actual}!`;
  };
  console.log(iter(1));
//  return null;
};

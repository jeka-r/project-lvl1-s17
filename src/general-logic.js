import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { askNumberAnswer, askYesNoAnswer } from './utils';

export default (description, generation) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const gamerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${gamerName}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${gamerName}!`;
    }
    const pair = generation();
    const question = cdr(pair);
    const result = car(pair);
    console.log(`Question: ${question}`);

    const answer = typeof result === 'string' ? askYesNoAnswer() : askNumberAnswer();

    if (result === answer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    return `Let's try again, ${gamerName}!`;
  };
  return iter(1);
};

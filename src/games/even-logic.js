import readlineSync from 'readline-sync';
import { getRandom } from '../utils';
import gamesProcess from '../general-logic';

function isEven(num) {
  return num % 2 === 0;
}

function askYesNoAnswer() {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return askYesNoAnswer();
}

function checkYesNoAnswer(str, num) {
  if (str === 'yes') {
    return isEven(num);
  }
  return !isEven(num);
}

export default () => {
  const gameDescription = 'Answer "yes" if number odd otherwise answer "no".';

  const getValue = () => getRandom(1, 20);

  const getQuestion = number => number;

  const askAnswer = () => askYesNoAnswer();

  const check = (answer, value) => checkYesNoAnswer(answer, value);

  console.log(gamesProcess(gameDescription, getValue, getQuestion, askAnswer, check));
};

import readlineSync from 'readline-sync';
import { getRandom, makeGreeting } from '../utils';
import gamesProcess from '../general-logic';

function askYesNoAnswer() {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return askYesNoAnswer();
}

function checkYesNoAnswer(str, num) {
  if (str === 'yes') {
    return num % 2 === 0;
  }
  return !num % 2 === 0;
}

export default () => {
  const gameDescription = 'Answer "yes" if number odd otherwise answer "no".';

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => getRandom(1, 20);

  const defQuestionAnswer = (number) => {
    console.log('Question:', number);
    return askYesNoAnswer();
  };

  const defCheck = (answer, value) => checkYesNoAnswer(answer, value);

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

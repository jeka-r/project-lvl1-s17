import { getRandom, askYesNoAnswer, checkYesNoAnswer, makeGreeting } from '../functions';
import gamesProcess from '../general-logic';

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

import { car, cdr } from 'hexlet-pairs';
import { defGcdValue, askNumberAnswer, calcGcdValue, makeGreeting } from '../functions';
import gamesProcess from '../general-logic';

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => defGcdValue();

  const defQuestionAnswer = (value) => {
    const number1 = car(value);
    const number2 = cdr(value);
    console.log(`Question: ${number1} ${number2}`);
    return askNumberAnswer();
  };

  const defCheck = (answer, value) => {
    const calculatedValue = calcGcdValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

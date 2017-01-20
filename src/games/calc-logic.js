import { car, cdr } from 'hexlet-pairs';
import { defCalcValue, askNumberAnswer, calcValue, makeGreeting } from '../functions';
import gamesProcess from '../general-logic';

export default () => {
  const gameDescription = 'What is the result of the expression?';

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => defCalcValue();

  const defQuestionAnswer = (value) => {
    const number1 = car(cdr(value));
    const number2 = cdr(cdr(value));
    const operator = car(value);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    return askNumberAnswer();
  };

  const defCheck = (answer, value) => {
    const calculatedValue = calcValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

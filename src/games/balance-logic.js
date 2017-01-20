import { getRandom, askNumberAnswer, makeGreeting } from '../utils';
import gamesProcess from '../general-logic';

function calcBalanceValue(num) {
  const arraiedNum = num.toString().split('');
  arraiedNum.sort();
  let minValue = +arraiedNum.shift();
  let maxValue = +arraiedNum.pop();
  if (maxValue - minValue <= 1) {
    return num;
  }
  maxValue -= 1;
  minValue += 1;
  arraiedNum.push(minValue, maxValue);
  arraiedNum.sort();
  const result = arraiedNum.join('');
  return calcBalanceValue(result);
}

export default () => {
  const gameDescription = 'Balance the given number.';

  const gamerActualName = makeGreeting(gameDescription);

  const defCurrentValue = () => getRandom(1, 5000);

  const defQuestionAnswer = (value) => {
    console.log(`Question: ${value}`);
    return askNumberAnswer();
  };

  const defCheck = (answer, value) => {
    const calculatedValue = +calcBalanceValue(value);
    console.log('answer = ', typeof answer);
    console.log('calculatedValue = ', typeof calculatedValue);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck));
};

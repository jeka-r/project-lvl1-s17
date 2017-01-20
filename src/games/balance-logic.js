import { getRandom, askNumberAnswer } from '../utils';
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

  const getValue = () => getRandom(1, 5000);

  const getQuestion = value => value;

  const askAnswer = () => askNumberAnswer();

  const check = (answer, value) => {
    const calculatedValue = +calcBalanceValue(value);
    return calculatedValue === answer;
  };

  console.log(gamesProcess(gameDescription, getValue, getQuestion, askAnswer, check));
};

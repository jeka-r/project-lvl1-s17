import { cons } from 'hexlet-pairs';
import getRandom from '../utils';
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
  const result = +arraiedNum.join('');
  return calcBalanceValue(result);
}
function isValidAnswer(message) {
  return !isNaN(parseFloat(message));
}

function generate() {
  const value = getRandom(1, 5000);
  const question = value;
  const calculatedValue = calcBalanceValue(value);
  return cons(calculatedValue.toString(), question);
}

export default () => {
  const description = 'Balance the given number.';
  gamesProcess(description, generate, isValidAnswer);
};

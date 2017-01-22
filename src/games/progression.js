import { cons } from 'hexlet-pairs';
import getRandom from '../utils';
import gamesProcess from '../general-logic';

function isValidAnswer(message) {
  return !isNaN(parseFloat(message));
}

function generate() {
  const value = [];
  const stepSize = getRandom(1, 10);
  const randomPosition = getRandom(2, 7);
  value[0] = getRandom(1, 20);

  for (let i = 1; i <= 9; i += 1) {
    value[i] = value[i - 1] + stepSize;
  }

  const calculatedValue = value[randomPosition];

  value[randomPosition] = '..';

  const question = value;

  return cons(calculatedValue.toString(), question);
}

export default () => {
  const description = 'What number is missing in this progression?';
  gamesProcess(description, generate, isValidAnswer);
};

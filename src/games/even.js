import { cons } from 'hexlet-pairs';
import { getRandom } from '../utils';
import gamesProcess from '../general-logic';

function isOdd(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

function isValidAnswer(message) {
  return message === 'yes' || message === 'no';
}

function generate() {
  const value = getRandom(1, 20);
  const question = value;
  const calculatedValue = isOdd(value);
  return cons(calculatedValue, question);
}

export default () => {
  const description = 'Answer "yes" if number odd otherwise answer "no".';
  gamesProcess(description, generate, isValidAnswer);
};

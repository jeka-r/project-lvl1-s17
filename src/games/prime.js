import { cons } from 'hexlet-pairs';
import { getRandom } from '../utils';
import gamesProcess from '../general-logic';

function isPrime(num) {
  if (num % 2 === 0 && num !== 2) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  const j = Math.round(Math.sqrt(num));
  for (let i = 3; i <= j; i += 2) {
    console.log(i);
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function isValidAnswer(message) {
  return message === 'yes' || message === 'no';
}

function generate() {
  const value = getRandom(2, 500);
  const question = value;
  const calculatedValue = isPrime(value);
  return cons(calculatedValue, question);
}

export default () => {
  const description = 'Answer "yes" if number is prime otherwise answer "no".';
  gamesProcess(description, generate, isValidAnswer);
};

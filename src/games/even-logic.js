import { cons } from 'hexlet-pairs';
import { getRandom } from '../utils';
import gamesProcess from '../general-logic';

function isOdd(num) {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
}

export default () => {
  const description = 'Answer "yes" if number odd otherwise answer "no".';

  function generation() {
    const value = getRandom(1, 20);

    const question = value;

    const result = isOdd(value);

    const pair = cons(result, question);

    return pair;
  }
  console.log(gamesProcess(description, generation));
};

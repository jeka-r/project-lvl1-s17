#!/usr/bin/node
import readlineSync from 'readline-sync';

function getRandomArbitrary(min, max, previusValue) {
  const number = (Math.random() * (max - min)) + min;
  if (number === previusValue) {
    return getRandomArbitrary(min, max, previusValue);
  }
  return number;
}

function checkOdd(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function asker() {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return asker();
}

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".');
const actual = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${actual}!`);

const iter = (acc, previusValue) => {
  if (acc >= 4) {
    return `Congratulations, ${actual}!`;
  }
  const number = Math.round(getRandomArbitrary(1, 20, previusValue));

  console.log('Question:', number);
  const answer = asker();

  if ((answer === 'yes' && checkOdd(number) === true) || (answer === 'no' && checkOdd(number) === false)) {
    console.log('Correct!');
    const newAcc = acc + 1;
    const newPreviusValue = number;
    return iter(newAcc, newPreviusValue);
  }

  return `Let's try again, ${actual}!`;
};

const result = iter(1, 0);

console.log(result);

import readlineSync from 'readline-sync';

export const makeGreeting = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const askNumberAnswer = () => {
  const result = parseFloat(readlineSync.question('Your answer: '));
  if (isNaN(result)) {
    return askNumberAnswer();
  }
  return result;
};

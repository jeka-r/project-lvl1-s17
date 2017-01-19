import readlineSync from 'readline-sync';

function getRandom(min, max) {
  return Math.round((Math.random() * (max - min)) + min);
}

function isEven(num) {
  return num % 2 === 0;
}

function getAnswer() {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return getAnswer();
}

function checkAnswer(str, num) {
  if (str === 'yes') {
    return isEven(num) === true;
  }
  return isEven(num) === false;
}

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${actual}!`;
    }
    const number = getRandom(1, 20);

    console.log('Question:', number);
    const answer = getAnswer();

    if (checkAnswer(answer, number) === true) {
      console.log('Correct!');
      const newAcc = acc + 1;
      return iter(newAcc);
    }

    return `Let's try again, ${actual}!`;
  };
  return iter(1);
};

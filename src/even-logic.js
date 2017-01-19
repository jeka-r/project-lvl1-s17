import readlineSync from 'readline-sync';

function getRandom(min, max) {
  return (Math.random() * (max - min)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

function asker() {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return asker();
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
    const number = Math.round(getRandom(1, 20));

    console.log('Question:', number);
    const answer = asker();

    if ((answer === 'yes' && isEven(number) === true) || (answer === 'no' && isEven(number) === false)) {
      console.log('Correct!');
      const newAcc = acc + 1;
      return iter(newAcc);
    }

    return `Let's try again, ${actual}!`;
  };
  return iter(1, 0);
};

import readlineSync from 'readline-sync';

export default (gameDescription, getValue, getQuestion, askAnswer, check) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const gamerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${gamerName}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      return `Congratulations, ${gamerName}!`;
    }
    const value = getValue();

    console.log(`Question: ${getQuestion(value)}`);

    const answer = askAnswer();

    if (check(answer, value)) {
      console.log('Correct!');
      return iter(acc + 1);
    }

    return `Let's try again, ${gamerName}!`;
  };
  return iter(1);
};

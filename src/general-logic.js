import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (description, generate, isValidAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const gamerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${gamerName}!`);

  const iter = (acc) => {
    if (acc >= 4) {
      console.log(`Congratulations, ${gamerName}!`);
      return null;
    }
    const pair = generate();
    const question = cdr(pair);
    const result = car(pair);
    console.log(`Question: ${question}`);
    let answer;

    do {
      answer = readlineSync.question('Your answer: ');
    } while (!isValidAnswer(answer));

    if (result === answer) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    console.log(`Let's try again, ${gamerName}!`);
    return null;
  };
  return iter(1);
};

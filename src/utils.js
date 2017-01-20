import readlineSync from 'readline-sync';

export const getRandom = (min, max) => Math.round((Math.random() * (max - min)) + min);

export const askNumberAnswer = () => {
  const result = parseFloat(readlineSync.question('Your answer: '));
  if (isNaN(result)) {
    return askNumberAnswer();
  }
  return result;
};

export const askYesNoAnswer = () => {
  const result = readlineSync.question('Your answer: ');
  if (result === 'yes' || result === 'no') {
    return result;
  }
  return askYesNoAnswer();
};

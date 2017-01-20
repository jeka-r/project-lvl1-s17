
export default (gamerActualName, defCurrentValue, defQuestionAnswer, defCheck) => {
  const iter = (gamerName, defValue, questionAnswer, check, acc) => {
    if (acc >= 4) {
      return `Congratulations, ${gamerName}!`;
    }
    const value = defValue();

    const answer = questionAnswer(value);

    if (check(answer, value)) {
      console.log('Correct!');
      return iter(gamerName, defValue, questionAnswer, check, acc + 1);
    }

    return `Let's try again, ${gamerName}!`;
  };
  return iter(gamerActualName, defCurrentValue, defQuestionAnswer, defCheck, 1);
};

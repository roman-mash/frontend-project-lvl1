import getRandom from '../functions.js';
import playDefault from '../index.js';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const description = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const number1 = getRandom(0, 25);
  const number2 = getRandom(0, 25);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [question, String(answer)];
};

const playGCD = () => playDefault(description, getGameData);

export default playGCD;

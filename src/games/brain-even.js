import getRandom from '../functions.js';
import playDefault from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if given number is even. Otherwise answer "no".';
const getGameData = () => {
  const number = getRandom(0, 25);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

const playBE = () => playDefault(description, getGameData);

export default playBE;

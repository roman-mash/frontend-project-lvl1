import getRandom from '../functions.js';
import playDefault from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const number = getRandom(0, 25);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, String(answer)];
};

const playPrime = () => playDefault(description, getGameData);

export default playPrime;

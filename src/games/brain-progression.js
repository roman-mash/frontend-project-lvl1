import getRandom from '../functions.js';
import playDefault from '../index.js';

const getProgression = (firstItem, length, diff) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const item = firstItem + diff * i;
    progression.push(item);
  }
  return progression;
};

const description = 'What number is missing in the progression?';
const getGameData = () => {
  const startItem = getRandom(0, 50);
  const lengthOfProgression = getRandom(5, 10);
  const hiddenItem = getRandom(0, lengthOfProgression - 1);
  const difference = getRandom(0, 15);
  const progression = getProgression(startItem, lengthOfProgression, difference);
  const answer = progression[hiddenItem];
  progression[hiddenItem] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(answer)];
};

const playProgression = () => playDefault(description, getGameData);

export default playProgression;

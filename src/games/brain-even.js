import readlineSync from 'readline-sync';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playBE = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandom(1, 100);
    const isEven = randomNumber % 2 === 0;

    const rightAnswer = isEven ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBE;

import getRandom from '../functions.js';
import playDefault from '../index.js';

const calculateExpression = (operand1, operator, operand2) => {
  let answer;

  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    default:
      answer = null;
  }
  return answer;
};

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const getGameData = () => {
  const operand1 = getRandom(0, 25);
  const operand2 = getRandom(0, 25);
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = calculateExpression(operand1, operator, operand2);
  return [question, String(answer)];
};

const playCalc = () => playDefault(description, getGameData);

export default playCalc;

import { USER_INTERFACE_ID } from '../constants.js';
import { selectedAnswers } from '../data.js';

const showResult = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = document.createElement('div');
  resultElement.setAttribute('id', 'result');
  resultElement.innerHTML = `<h3>Results</h3>
  <ul id="list"></ul>`;
  userInterface.appendChild(resultElement);
  const resultList = document.getElementById('list');

  selectedAnswers.forEach((answer) => {
    console.log(answer);
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    h4.innerHTML = answer.text;
    p.innerText = `Selected : ${answer.answers[answer.selected]}  Correct : ${
      answer.answers[answer.correct]
    }`;

    li.appendChild(h4);
    li.appendChild(p);
    resultList.appendChild(li);
  });
};

export default showResult;

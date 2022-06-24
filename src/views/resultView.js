import { selectedAnswers } from '../data.js';

const showResult = () => {
  const resultElement = document.createElement('div');
  resultElement.setAttribute('id', 'result');
  const heading = document.createElement('h3');
  heading.innerText = 'Results';
  const ulElement = document.createElement('h3');
  ulElement.setAttribute('id', 'list');

  selectedAnswers.forEach((answer) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    h4.innerHTML = answer.text;
    p.innerText = `Selected : ${answer.answers[answer.selected]}  Correct : ${
      answer.answers[answer.correct]
    }`;

    li.appendChild(h4);
    li.appendChild(p);
    ulElement.appendChild(li);
  });

  resultElement.appendChild(ulElement);
  console.log(resultElement);
  return resultElement;
};

export default showResult;

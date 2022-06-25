import { selectedAnswers } from '../data.js';

const showResult = () => {
  const resultElement = document.createElement('div');
  resultElement.setAttribute('id', 'result');
  const heading = document.createElement('h3');
  heading.innerText = 'Results';
  const ulElement = document.createElement('ul');
  ulElement.setAttribute('id', 'list');

  selectedAnswers.forEach((answer) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    h4.innerHTML = answer.text;
    p.innerHTML = `<span>Selected :</span>${
      answer.answers[answer.selected]
    }`
    p2.innerHTML = `<span> Correct:</span>${
      answer.answers[answer.correct]
    }`;

    li.appendChild(h4);
    li.appendChild(p);
    li.appendChild(p2);
    ulElement.appendChild(li);
  });

  resultElement.appendChild(ulElement);
  return resultElement;
};

export default showResult;

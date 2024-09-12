import { quizData } from '../data.js';
import { storageService } from '../services/storeService.js';
import { RESULT_BUTTON_ID } from '../constants.js';
import { 
  createButton, 
  resetQuiz
} from '../pages/questionPage.js';

const showResult = () => {
  const resultElement = document.createElement('div');
  resultElement.setAttribute('id', 'result');
  const heading = document.createElement('h3');
  heading.innerText = 'Results';
  const ulElement = document.createElement('ul');
  ulElement.setAttribute('id', 'list');

  quizData.questions
    .filter((_, index) => storageService.getQuestions().includes(index))
    .forEach((answer, index) => {
      const li = document.createElement('li');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      h4.innerHTML = index + 1 + ' - ' + answer.text;
      p.innerHTML = `<span>Selected :</span>${
        answer.answers[storageService.getAnswer(index)] ?? '-'
      }`;
      p2.innerHTML = `<span> Correct:</span>${answer.answers[answer.correct]}`;

      li.appendChild(h4);
      li.appendChild(p);
      li.appendChild(p2);
      ulElement.appendChild(li);
    });

  resultElement.appendChild(ulElement);
  return resultElement;
};

export default showResult;

export const resetResultButton = () => {
  const restartButton = createButton({
    id: RESULT_BUTTON_ID,
    text: 'RESTART QUIZ',
    callback: resetQuiz,
  })
  restartButton.className = "reset-result-button"
  return restartButton
}

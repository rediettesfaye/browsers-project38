'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, SCORE } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (questionNumber, question) => {
  const element = document.createElement('div');
  element.classList.add('question');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${questionNumber} - ${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next
    </button>
  `;

  return element;
};


export const initScore = (count) => {
  const score = document.createElement('div');

  score.innerHTML = String.raw`
    <h1 id = "${SCORE}">
      Score: ${count}
    </h1>
  `;

  return score;
}






'use strict';

import { ANSWERS_OPTION_ID } from '../constants.js';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText, classList) => {
  const element = document.createElement('li');
  element.classList.add(classList);
  element.id = `${ANSWERS_OPTION_ID}_${key}`;
  element.innerHTML = String.raw`
    <span class="key">${key.toUpperCase()}</span> 
    <span>${answerText}</span>
  `;
  return element;
};

import {
  REGISTRATION_PAGE_SAVE_BUTTON_ID,
  USERNAME_INPUT_ID,
} from '../constants.js';

export const createRegistrationElement = () => {
  const element = document.createElement('div');
  element.classList.add('question');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
      <h1>What's your name, challenger?</h1>
  
      <input type='text' id='${USERNAME_INPUT_ID}' placeholder='Type your answer here...' class='name-input' >
  
      <button id="${REGISTRATION_PAGE_SAVE_BUTTON_ID}">
        OK
      </button>
    `;

  return element;
};

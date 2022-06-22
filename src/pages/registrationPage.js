import { createRegistrationElement } from '../views/registrationView.js';
import { storageService } from '../services/storeService.js';
import { initQuestionPage } from './questionPage.js';
import {
  USER_INTERFACE_ID,
  REGISTRATION_PAGE_SAVE_BUTTON_ID,
  USERNAME_INPUT_ID,
} from '../constants.js';

export const initRegistrationPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const registrationElement = createRegistrationElement();

  userInterface.appendChild(registrationElement);

  setDefaultUserName();

  document
    .getElementById(REGISTRATION_PAGE_SAVE_BUTTON_ID)
    .addEventListener('click', registerName);
};

const setDefaultUserName = () => {
  const currentUserName = storageService.getCurrentUsername();
  if (currentUserName) {
    document.getElementById(USERNAME_INPUT_ID).value = currentUserName;
  }
};

const registerName = () => {
  const usernameInput = document.getElementById(USERNAME_INPUT_ID);
  storageService.setCurrentUsername(usernameInput.value);
  //   storageService.resetUser(usernameInput.value);
  startQuiz();
};

const startQuiz = () => {
  initQuestionPage();
};

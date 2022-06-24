import { createRegistrationElement } from '../views/registrationView.js';
import { storageService } from '../services/storeService.js';
import { initQuestionPage } from './questionPage.js';
import { createRandomQuestionList } from '../data.js';
import {
  REGISTRATION_PAGE_SAVE_BUTTON_ID,
  USERNAME_INPUT_ID,
} from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';

export const initRegistrationPage = () => {
  const idleContainer = pageTransitionService.getIdleContainer();

  const registrationElement = createRegistrationElement();

  idleContainer.appendChild(registrationElement);

  setDefaultUserName();

  document
    .getElementById(REGISTRATION_PAGE_SAVE_BUTTON_ID)
    .addEventListener('click', registerName);

  pageTransitionService.slideUp();
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
  storageService.resetUser(usernameInput.value);
  startQuiz();
};

const startQuiz = () => {
  createRandomQuestionList();
  initQuestionPage();
};

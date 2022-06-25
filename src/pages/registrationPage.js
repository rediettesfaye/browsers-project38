import { createRegistrationElement } from '../views/registrationView.js';
import { storageService } from '../services/storeService.js';
import { initQuestionPage } from './questionPage.js';
import { createRandomQuestionList } from '../data.js';
import {
  REGISTRATION_PAGE_SAVE_BUTTON_ID,
  USERNAME_INPUT_ID,
  PREV_BUTTON_ID,
} from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { createButton, createButtonGroup } from './questionPage.js';
import { initWelcomePage } from '../pages/welcomePage.js';

export const initRegistrationPage = () => {
  const idleContainer = pageTransitionService.getIdleContainer();

  const registrationElement = createRegistrationElement();

  const buttonGroup = createButtonGroup('start');
  buttonGroup.appendChild(
    createButton({
      id: PREV_BUTTON_ID,
      text: 'PREVIOUS',
      callback: previousPage,
    })
  );
  buttonGroup.appendChild(
    createButton({
      id: REGISTRATION_PAGE_SAVE_BUTTON_ID,
      text: 'NEXT',
      callback: registerName,
    })
  );
  registrationElement.appendChild(buttonGroup);

  idleContainer.appendChild(registrationElement);

  setDefaultUserName();

  pageTransitionService.slide();
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
  // storageService.resetUser(usernameInput.value);
  startQuiz();
};

const startQuiz = () => {
  pageTransitionService.setSlideDirectionUp();
  if (!storageService.hasQuestions()) {
    createRandomQuestionList();
  }
  initQuestionPage();
};

const previousPage = () => {
  pageTransitionService.setSlideDirectionDown();
  initWelcomePage();
};

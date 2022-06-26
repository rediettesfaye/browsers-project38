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

// it creates registration page
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

// it checks the local storage for currentUsername. 
// if there is a username, it sets it to the input
const setDefaultUserName = () => {
  const currentUserName = storageService.getCurrentUsername();
  if (currentUserName) {
    document.getElementById(USERNAME_INPUT_ID).value = currentUserName;
  }
};

// it saves the given username to the local storage
const registerName = () => {
  const usernameInput = document.getElementById(USERNAME_INPUT_ID);
  storageService.setCurrentUsername(usernameInput.value);
  startQuiz();
};

// it checks local storage if there are question for user, 
// if not, it creates random question and save them to the local storage. 
// and then it brings question page.
const startQuiz = () => {
  pageTransitionService.setSlideDirectionUp();
  if (!storageService.hasQuestions()) {
    createRandomQuestionList();
  }
  initQuestionPage();
};

// it brings welcome page
const previousPage = () => {
  pageTransitionService.setSlideDirectionDown();
  initWelcomePage();
};

'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initRegistrationPage } from './registrationPage.js';

export const initWelcomePage = () => {
  const idleContainer = pageTransitionService.getIdleContainer();

  const welcomeElement = createWelcomeElement();
  idleContainer.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', registerUsername);

  pageTransitionService.slideUp();
};

const registerUsername = () => {
  initRegistrationPage();
};

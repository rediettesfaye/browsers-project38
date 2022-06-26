'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initRegistrationPage } from './registrationPage.js';
import { createButton } from './questionPage.js';

// it creates welcome page
export const initWelcomePage = () => {
  const idleContainer = pageTransitionService.getIdleContainer();

  const welcomeElement = createWelcomeElement();
  welcomeElement.appendChild(
    createButton({
      id: START_QUIZ_BUTTON_ID,
      text: 'START',
      callback: start,
    })
  );

  idleContainer.appendChild(welcomeElement);

  pageTransitionService.slide();
};

// it brings the registration page
const start = () => {
  pageTransitionService.setSlideDirectionUp();
  initRegistrationPage();
};

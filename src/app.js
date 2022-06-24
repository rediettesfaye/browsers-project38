'use strict';

import { quizData } from './data.js';
import { initTransitionLayout } from './pages/transitionLayoutView.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  document.title = 'Test Your Language'
  initTransitionLayout();
  initWelcomePage();
};

window.addEventListener('load', loadApp);

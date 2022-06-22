'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  document.title = 'Test Your Language'
  initWelcomePage();
};

window.addEventListener('load', loadApp);

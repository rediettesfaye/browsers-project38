'use strict';

import {
  ANSWERS_LIST_ID,
  ANSWERS_OPTION_ID,
  ANSWERS_OPTION_RADIO_BUTTON_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = getCurrentQuestion();

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      currentQuestion.selected
    );
    answersListElement.appendChild(answerElement);

    document
      .getElementById(ANSWERS_OPTION_RADIO_BUTTON_ID + '_' + key)
      .addEventListener('change', changeOption.bind(null, key));
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const changeOption = (key) => {
  getCurrentQuestion().selected = key;
  clearAllSelections();
  selectAnswer(key);
};

const clearAllSelections = () => {
  Array.from(document.getElementById(ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('selected-answer');
    }
  );
};

const selectAnswer = (key) => {
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

const getCurrentQuestion = () => {
  return quizData.questions[quizData.currentQuestionIndex];
};

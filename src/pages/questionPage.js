'use strict';

import {
  ANSWERS_LIST_ID,
  ANSWERS_OPTION_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { storageService } from '../services/storeService.js';

// TODO this variable will change with the username that will be taken from user
const username = 'username';

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
      createClassListForAnswer(quizData.currentQuestionIndex, key)
    );
    answersListElement.appendChild(answerElement);

    document
      .getElementById(ANSWERS_OPTION_ID + '_' + key)
      .addEventListener('click', changeOption.bind(null, key));
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const createClassListForAnswer = (questionIndex, key) => {
  const classList = [];
  if (storageService.hasAnswer(username, questionIndex)) {
    if (getCurrentQuestion().correct === key) {
      classList.push('correct-answer');
    } else if (storageService.getAnswer(username, questionIndex) === key) {
      classList.push('selected-answer');
    }
  } else {
    classList.push('pointer');
  }
  return classList.length > 0 ? classList : null;
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const changeOption = (key) => {
  if (storageService.hasAnswer(username, quizData.currentQuestionIndex)) {
    return;
  }
  clearAllSelections();
  clearAllPointerFromCursor();
  selectAnswer(key);
  setStyleForSelectedAnswer(key);
  showCorrectAnswer();
};

const clearAllSelections = () => {
  Array.from(document.getElementById(ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('selected-answer');
    }
  );
};

const clearAllPointerFromCursor = () => {
  Array.from(document.getElementById(ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('pointer');
    }
  );
};

const selectAnswer = (key) => {
  storageService.saveAnswer(username, quizData.currentQuestionIndex, key);
};

const setStyleForSelectedAnswer = (key) => {
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

const getCurrentQuestion = () => {
  return quizData.questions[quizData.currentQuestionIndex];
};

const showCorrectAnswer = () => {
  const correctOption = getCurrentQuestion().correct;
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + correctOption)
    .classList.add('correct-answer');
};

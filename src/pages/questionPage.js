'use strict';

import {
  ANSWERS_LIST_ID,
  ANSWERS_OPTION_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { 
  createQuestionElement, 
  initScore, 
  updateScore 
} from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { storageService } from '../services/storeService.js';
import { quizData, randomQuestionsArray } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const showScore = initScore(quizData.score)
  userInterface.appendChild(showScore)

  const currentQuestion = getCurrentQuestion();

  const questionElement = createQuestionElement(
    quizData.currentQuestionIndex + 1,
    currentQuestion.text
  );

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

  if (quizData.currentQuestionIndex < 9) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  } else {
    document.getElementById(NEXT_QUESTION_BUTTON_ID).classList.add('hide');
    const finishButton = document.createElement('button');
    finishButton.innerText = 'See Results';
    userInterface.appendChild(finishButton);
  }
};

const createClassListForAnswer = (questionIndex, key) => {
  const classList = [];
  if (storageService.hasAnswer(questionIndex)) {
    if (getCurrentQuestion().correct === key) {
      classList.push('correct-answer');
    } else if (storageService.getAnswer(questionIndex) === key) {
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
  if (storageService.hasAnswer(quizData.currentQuestionIndex)) {
    return;
  }
  clearAllSelections();
  clearAllPointerFromCursor();
  selectAnswer(key);
  setStyleForSelectedAnswer(key);
  showCorrectAnswer();
  updateScore(getCurrentQuestion().correct, key)
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
  storageService.saveAnswer(quizData.currentQuestionIndex, key);
};

const setStyleForSelectedAnswer = (key) => {
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

const getCurrentQuestion = () => {
  return randomQuestionsArray[quizData.currentQuestionIndex];
};

const showCorrectAnswer = () => {
  const correctOption = getCurrentQuestion().correct;
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + correctOption)
    .classList.add('correct-answer');
};


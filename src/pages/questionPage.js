'use strict';

import {
  ANSWERS_LIST_ID,
  ANSWERS_OPTION_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { storageService } from '../services/storeService.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { initScore, updateScore } from '../pages/scorePage.js';
import { quizData, randomQuestionsArray, selectedAnswers } from '../data.js';
import { resultPage } from './resultpages.js';
import { createLinks } from '../views/linkViews.js';



let container;

export const initQuestionPage = () => {
  container = pageTransitionService.getIdleContainer();

  const showScore = initScore(quizData.score);
  container.appendChild(showScore);

  const currentQuestion = getCurrentQuestion();

  const questionElement = createQuestionElement(
    quizData.currentQuestionIndex + 1,
    currentQuestion.text



  );

  container.appendChild(questionElement);

  const answersListElement = container.querySelector('#' + ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      createClassListForAnswer(quizData.currentQuestionIndex, key)
    );
    answersListElement.appendChild(answerElement);

    container
      .querySelector('#' + ANSWERS_OPTION_ID + '_' + key)
      .addEventListener('click', changeOption.bind(null, key));
  }

  if (quizData.currentQuestionIndex < randomQuestionsArray.length - 1) {
    container
      .querySelector('#' + NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  } else {
    container
      .querySelector('#' + NEXT_QUESTION_BUTTON_ID)
      .classList.add('hide');
    const finishButton = document.createElement('button');
    finishButton.innerText = 'See Results';

    container.appendChild(finishButton);
    finishButton.addEventListener('click', resultPage);
  }

  pageTransitionService.slideUp();
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
  updateScore(getCurrentQuestion().correct, key);
};

const clearAllSelections = () => {
  Array.from(container.querySelector('#' + ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('selected-answer');
    }
  );
};

const clearAllPointerFromCursor = () => {
  Array.from(container.querySelector('#' + ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('pointer');
    }
  );
};

const selectAnswer = (key) => {
  const correctQuestion = getCurrentQuestion();
  correctQuestion.selected = key;
  selectedAnswers.push(correctQuestion);
  storageService.saveAnswer(quizData.currentQuestionIndex, key);
};

const setStyleForSelectedAnswer = (key) => {
  container
    .querySelector('#' + ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

const getCurrentQuestion = () => {
  return randomQuestionsArray[quizData.currentQuestionIndex];
};

const showCorrectAnswer = () => {
  const correctOption = getCurrentQuestion().correct;
  container
    .querySelector('#' + ANSWERS_OPTION_ID + '_' + correctOption)
    .classList.add('correct-answer');
};

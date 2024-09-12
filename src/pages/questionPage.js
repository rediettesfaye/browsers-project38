'use strict';

import {
  ANSWERS_LIST_ID,
  ANSWERS_OPTION_ID,
  NEXT_QUESTION_BUTTON_ID,
  PREV_QUESTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  RESULT_BUTTON_ID,
  RESET_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { storageService } from '../services/storeService.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { initScore, updateScore } from '../pages/scorePage.js';
import { quizData } from '../data.js';
import { resultPage } from './resultPage.js';
import { initRegistrationPage } from './registrationPage.js';
import { initWelcomePage } from './welcomePage.js';
import { createButtonElement } from '../views/buttonView.js';
import { createButtonGroupElement } from '../views/buttonView.js';

let container;

// it creates question page
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

  createButtons();

  pageTransitionService.slide();
};

// it sets the proper css classes('correct-answer', 'selected-answer')
// for the options if the question was answered. 
// if question has not been answered yet, it sets 'cursor:pointer' style to that option.
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

// it creates buttons for questions. every question has 'previous', 'skip', and 'next' button
// but only one of the 'skip' and 'next' button is visible at the same time. it changes their
// visibilities according to whether the answer has been answered or not.
// And last question has only 'see result' button.
const createButtons = () => {
  const buttonGroupParent = createButtonGroup('space-between');
  if (quizData.currentQuestionIndex < storageService.getQuestionCount() - 1) {
    const buttonGroupLeft = createButtonGroup('start');
    const buttonGroupRight = createButtonGroup('end');

    buttonGroupParent.appendChild(buttonGroupLeft);
    buttonGroupParent.appendChild(buttonGroupRight);

    container.appendChild(buttonGroupParent);

    const hasAnswer = storageService.hasAnswer(quizData.currentQuestionIndex);

    buttonGroupLeft.appendChild(
      createButton({
        id: PREV_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex,
        text: 'PREVIOUS',
        callback: prevQuestion,
      })
    );

    buttonGroupLeft.appendChild(
      createButton({
        id: NEXT_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex,
        text: 'NEXT',
        callback: nextQuestion,
        visibility: hasAnswer,
      })
    );

    buttonGroupLeft.appendChild(
      createButton({
        id: SKIP_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex,
        text: 'SKIP',
        callback: skipQuestion,
        visibility: !hasAnswer,
      })
    );

    buttonGroupRight.appendChild(
      createButton({
        id: RESET_BUTTON_ID + '_' + quizData.currentQuestionIndex,
        text: 'RESET',
        callback: resetQuiz,
      })
    );
  } else {
    container.appendChild(buttonGroupParent);
    buttonGroupParent.appendChild(
      createButton({
        id: RESULT_BUTTON_ID,
        text: 'SEE RESULTS',
        callback: showResultPage,
      })
    );
  }
};

// it changes question index to next one.
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  pageTransitionService.setSlideDirectionUp();
  initQuestionPage();
};

// it changes question index to previous one
const prevQuestion = () => {
  pageTransitionService.setSlideDirectionDown();
  if (quizData.currentQuestionIndex > 0) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex - 1;
    initQuestionPage();
  } else {
    initRegistrationPage();
  }
};

// it deletes all data is belong to the current user in the local storage
// and also resets current question index to the 0.
export const resetQuiz = () => {
  storageService.resetUser();
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
};

// it clears all styles related to the option selection
// and set style to the selected and correct answer.
// and makes 'next button' visible, 'skip button' invisible.
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
  hideButton(SKIP_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex);
  showButton(NEXT_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex);
};

// it clears 'selected-answer' style from all options.
const clearAllSelections = () => {
  Array.from(container.querySelector('#' + ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('selected-answer');
    }
  );
};

// it clears 'pointer' style from all options.
const clearAllPointerFromCursor = () => {
  Array.from(container.querySelector('#' + ANSWERS_LIST_ID).children).forEach(
    (li) => {
      li.classList.remove('pointer');
    }
  );
};

// it saves correct answer to the local storage of browser.
const selectAnswer = (key) => {
  storageService.saveAnswer(quizData.currentQuestionIndex, key);
};

// it sets style to the selected answer.
const setStyleForSelectedAnswer = (key) => {
  container
    .querySelector('#' + ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

// it gives current question.
const getCurrentQuestion = () => {
  return quizData.questions[storageService.getQuestionId(quizData.currentQuestionIndex)];
};

// it sets style to the correct answer
const showCorrectAnswer = () => {
  const correctOption = getCurrentQuestion().correct;
  container
    .querySelector('#' + ANSWERS_OPTION_ID + '_' + correctOption)
    .classList.add('correct-answer');
};

// it save '-' to the local storage for current question, it means this question left empty 
// and it shows the correct answer, then changes the visibility of 'skip' and 'next' buttons.
const skipQuestion = () => {
  storageService.saveAnswer(quizData.currentQuestionIndex, '-');
  showCorrectAnswer();
  hideButton(SKIP_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex);
  showButton(NEXT_QUESTION_BUTTON_ID + '_' + quizData.currentQuestionIndex);
};

// it shows the result page.
const showResultPage = () => {
  pageTransitionService.setSlideDirectionUp();
  resultPage();
};

// it creates button with the given parameters.
export const createButton = ({ id, text, callback, visibility = true }) => {
  const element = createButtonElement({
    id: id,
    text: text,
    visibility: visibility,
  });
  element.querySelector('#' + id).addEventListener('click', callback);

  return element;
};

// it hides the button.
const hideButton = (id) => {
  const button = container.querySelector('#' + id);
  if (!button) {
    return;
  }
  button.style.display = 'none';
};

// it makes button visible.
const showButton = (id) => {
  const button = container.querySelector('#' + id);
  if (!button) {
    return;
  }
  button.style.display = 'block';
};

// it creates a div for container with given 'justify-content' style.
export const createButtonGroup = (justifyContent) => {
  const element = createButtonGroupElement(justifyContent);

  return element;
};

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
import { quizData, randomQuestionsArray } from '../data.js';

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

    document
      .getElementById(ANSWERS_OPTION_ID + '_' + key)
      .addEventListener('click', changeOption.bind(null, key));
  }

  if(quizData.currentQuestionIndex < 9) {
   document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
 } else {
  document.getElementById(NEXT_QUESTION_BUTTON_ID).classList.add("hide")
  const finishButton = document.createElement('button');
  finishButton.innerText = "See Results" ;
  userInterface.appendChild(finishButton)

 }


};

const nextQuestion = () => {
quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
initQuestionPage();

  }

const changeOption = (key) => {
  if (getCurrentQuestion().selected) {
    return;
  }
  getCurrentQuestion().selected = key;
  checkRadioButton(key);
  clearAllSelections();
  clearAllPointerFromCursor();
  selectAnswer(key);
  showCorrectAnswer();
};

const checkRadioButton = (key) => {
  document.getElementById(
    ANSWERS_OPTION_RADIO_BUTTON_ID + '_' + key
  ).checked = true;
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
}

const selectAnswer = (key) => {
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + key)
    .classList.add('selected-answer');
};

const getCurrentQuestion = () => {
  return randomQuestionsArray[quizData.currentQuestionIndex]
 
};

window.addEventListener('load' , () => { 
  let randomIndexesOfQuestions = [];

  quizData.questions.forEach(question =>{
    let randomIndex = Math.floor(Math.random()* quizData.questions.length)
    if(!randomIndexesOfQuestions.includes(randomIndex) && randomIndexesOfQuestions.length<10){
      randomIndexesOfQuestions.push(randomIndex)
    }
  })
    randomIndexesOfQuestions.forEach(index =>{
      randomQuestionsArray.push(quizData.questions[index])
    })
    console.log(randomQuestionsArray)
   })

const showCorrectAnswer = () => {
  const correctOption = getCurrentQuestion().correct;
  document
    .getElementById(ANSWERS_OPTION_ID + '_' + correctOption)
    .classList.add('correct-answer');
};


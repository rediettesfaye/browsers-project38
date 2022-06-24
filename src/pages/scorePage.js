import { SCORE_VALUE_ID } from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import { createScoreElement } from '../views/scoreView.js';
import { storageService } from '../services/storeService.js';

export const initScore = () => {
  const scoreElement = createScoreElement(storageService.getUserScore());

  return scoreElement;
};

export const updateScore = (correct, key) => {
  let score = storageService.getUserScore();
  if (correct === key) {
    score++;
    storageService.saveUserScore(score);
  }

  const scoreElement1 = pageTransitionService
    .getCurrentContainer()
    .querySelector('#' + SCORE_VALUE_ID);
  scoreElement1.innerHTML = score;
};

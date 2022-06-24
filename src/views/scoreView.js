import { SCORE_ID, SCORE_VALUE_ID } from '../constants.js';

export const createScoreElement = (defaultScore) => {
  const score = document.createElement('div');

  score.innerHTML = String.raw`
      <h1 id = "${SCORE_ID}">
        Score: <span id=${SCORE_VALUE_ID}>${defaultScore}</span>
      </h1>
    `;

  return score;
};

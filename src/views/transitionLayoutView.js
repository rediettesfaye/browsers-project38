import {
  TRANSITION_CONTAINER_1_ID,
  TRANSITION_CONTAINER_2_ID,
} from '../constants.js';

export const createTransitionContainers = () => {
  const element = document.createElement('div');
  element.style.height = 'inherit';
  element.style.position = 'relative';
  element.innerHTML = String.raw`
      <div id='${TRANSITION_CONTAINER_1_ID}'></div>
      <div id='${TRANSITION_CONTAINER_2_ID}'></div>
    `;
  return element;
};

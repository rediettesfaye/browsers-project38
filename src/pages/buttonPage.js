import { createButtonElement } from '../views/buttonView.js';
import { createButtonGroupElement } from '../views/buttonView.js';

export const createButton = ({ id, text, callback }) => {
  const element = createButtonElement(id, text);
  element.querySelector('#' + id).addEventListener('click', callback);

  return element;
};

export const updateButton = ({ container, id, text, callback }) => {
  const button = container.querySelector('#' + id);
  if (text) {
    button.innerText = text;
  }
  if (callback) {
    button.onclick = callback;
  }
};

export const createButtonGroup = (id) => {
  const element = createButtonGroupElement(id);

  return element;
};

export const createButtonElement = (id, text) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
      <button id='${id}'>${text}</button>
    `;
  return element;
};

export const createButtonGroupElement = (id) => {
  const element = document.createElement('div');
  element.id = id;
  element.classList.add('button-group');
  return element;
};

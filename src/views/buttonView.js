export const createButtonElement = (id, text) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
      <button id='${id}'>${text}</button>
    `;
  return element;
};

export const createButtonGroupElement = (justifyContent) => {
  const element = document.createElement('div');
  element.style.justifyContent = justifyContent;
  element.classList.add('button-group');
  return element;
};

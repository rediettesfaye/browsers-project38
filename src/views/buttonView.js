export const createButtonElement = ({ id, text, visibility = true }) => {
  const element = document.createElement('div');
  const display = visibility ? 'inline-block' : 'none';
  element.innerHTML = String.raw`
      <button id='${id}' style='display:${display}'>${text}</button>
    `;
  return element;
};

export const createButtonGroupElement = (justifyContent) => {
  const element = document.createElement('div');
  element.style.justifyContent = justifyContent;
  element.classList.add('button-group');
  return element;
};

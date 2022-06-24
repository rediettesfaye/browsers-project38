import { USER_INTERFACE_ID } from '../constants.js';
import showResult from '../views/resultView.js';

const resultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const result = showResult();
  userInterface.appendChild(result);
};

export default resultPage;

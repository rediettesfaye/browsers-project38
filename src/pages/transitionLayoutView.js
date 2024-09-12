import { USER_INTERFACE_ID } from '../constants.js';
import { createTransitionContainers } from '../views/transitionLayoutView.js';

// it creates 2 div's for transition layout.
export const initTransitionLayout = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const transitionLayout = createTransitionContainers();

  userInterface.appendChild(transitionLayout);
};

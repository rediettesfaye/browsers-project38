import { USER_INTERFACE_ID } from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import showResult from '../views/resultView.js';

export const resultPage = () => {
  const container = pageTransitionService.getIdleContainer();
  const result = showResult();
  container.appendChild(result);

  pageTransitionService.slideUp();
};


import { pageTransitionService } from '../services/pageTransitionService.js';
import showResult from '../views/resultView.js';
import { resetResultButton } from '../views/resultView.js'



export const resultPage = () => {
  const container = pageTransitionService.getIdleContainer();
  const result = showResult();
  container.appendChild(result);
  const button = resetResultButton()
  container.appendChild(button);

  pageTransitionService.slide();
};

import { USER_INTERFACE_ID } from '../constants.js';
import { RESULT_BUTTON_ID } from '../constants.js';
import { pageTransitionService } from '../services/pageTransitionService.js';
import showResult from '../views/resultView.js';
import { 
  createButton, 
  resetQuiz
} from '../pages/questionPage.js';


export const resultPage = () => {
  const container = pageTransitionService.getIdleContainer();
  const result = showResult();
  container.appendChild(result);
  container.appendChild(
    createButton({
      id: RESULT_BUTTON_ID,
      text: 'RESTART QUIZ',
      callback: resetQuiz,
    })
  );

  pageTransitionService.slide();
};

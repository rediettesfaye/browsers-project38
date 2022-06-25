import {
  TRANSITION_CONTAINER_1_ID,
  TRANSITION_CONTAINER_2_ID,
} from '../constants.js';

export const pageTransitionService = (() => {
  let currentContainer;
  let idleContainer;

  let slideDirection;

  const UP = 'UP';
  const DOWN = 'DOWN';

  const SLIDE_TO_TOP_CLASS = 'slide-to-top';
  const SLIDE_FROM_BOTTOM_CLASS = 'slide-from-bottom';
  const HIDE_CLASS = 'invisible';
  const SLIDE_FROM_TOP_CLASS = 'slide-from-top';
  const SLIDE_TO_BOTTOM_CLASS = 'slide-to-bottom';

  // this function brings the idle div.
  const getIdleContainer = () => {
    const container1 = document.getElementById(TRANSITION_CONTAINER_1_ID);
    const container2 = document.getElementById(TRANSITION_CONTAINER_2_ID);

    if (!currentContainer) {
      // at the beginning of the quiz, current container1 is undefined
      // so it is empty and it will return container1
      container1.innerHTML = '';
      container1.classList.add(HIDE_CLASS);
      return container1;
    } else if (currentContainer.id === TRANSITION_CONTAINER_2_ID) {
      container1.innerHTML = '';
      container1.classList.add(HIDE_CLASS);
      return container1;
    } else {
      container2.innerHTML = '';
      container2.classList.add(HIDE_CLASS);
      return container2;
    }
  };

  const getCurrentContainer = () => currentContainer;

  const setSlideDirectionUp = () => (slideDirection = UP);
  const setSlideDirectionDown = () => (slideDirection = DOWN);

  const slide = () => {
    console.log(slideDirection);
    if (slideDirection === DOWN) {
      _slideDown();
    } else {
      _slideUp();
    }
  };

  const _slideUp = () => {
    const container1 = document.getElementById(TRANSITION_CONTAINER_1_ID);
    const container2 = document.getElementById(TRANSITION_CONTAINER_2_ID);

    if (currentContainer) {
      currentContainer.addEventListener('animationend', _afterAnimation);
      currentContainer.classList.remove(SLIDE_FROM_BOTTOM_CLASS);
      currentContainer.classList.remove(SLIDE_FROM_TOP_CLASS);
      currentContainer.classList.add(SLIDE_TO_TOP_CLASS);
      idleContainer.classList.remove(HIDE_CLASS);
      idleContainer.classList.remove(SLIDE_TO_TOP_CLASS);
      idleContainer.classList.remove(SLIDE_TO_BOTTOM_CLASS);
      idleContainer.classList.add(SLIDE_FROM_BOTTOM_CLASS);
    } else {
      // at the beginning of the quiz, currentContainer and idleContainer are undefined,
      // so it assigns container1 to currentContainer, and container2 to idleContainer as a default
      currentContainer = container1;
      idleContainer = container2;
      currentContainer.classList.remove(HIDE_CLASS);
      currentContainer.classList.add(SLIDE_FROM_BOTTOM_CLASS);
      idleContainer.classList.add(HIDE_CLASS);
    }
  };

  const _slideDown = () => {
    const container1 = document.getElementById(TRANSITION_CONTAINER_1_ID);
    const container2 = document.getElementById(TRANSITION_CONTAINER_2_ID);

    if (currentContainer) {
      currentContainer.addEventListener('animationend', _afterAnimation);
      currentContainer.classList.remove(SLIDE_FROM_BOTTOM_CLASS);
      currentContainer.classList.remove(SLIDE_FROM_TOP_CLASS);
      currentContainer.classList.add(SLIDE_TO_BOTTOM_CLASS);
      idleContainer.classList.remove(HIDE_CLASS);
      idleContainer.classList.remove(SLIDE_TO_TOP_CLASS);
      idleContainer.classList.remove(SLIDE_TO_BOTTOM_CLASS);
      idleContainer.classList.add(SLIDE_FROM_TOP_CLASS);
    } else {
      // at the beginning of the quiz, currentContainer and idleContainer are undefined,
      // so it assigns container1 to currentContainer, and container2 to idleContainer as a default
      currentContainer = container1;
      idleContainer = container2;
      currentContainer.classList.remove(HIDE_CLASS);
      currentContainer.classList.add(SLIDE_FROM_TOP_CLASS);
      idleContainer.classList.add(HIDE_CLASS);
    }
  };

  const _afterAnimation = () => {
    currentContainer.removeEventListener('animationend', _afterAnimation);
    currentContainer.classList.add(HIDE_CLASS);
    if (idleContainer) {
      // it swaps currentContainer and idleContainer
      [currentContainer, idleContainer] = [idleContainer, currentContainer];
    }
  };

  return {
    getIdleContainer,
    getCurrentContainer,
    setSlideDirectionUp,
    setSlideDirectionDown,
    slide,
  };
})();

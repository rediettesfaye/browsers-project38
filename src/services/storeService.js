const CURRENT_USERNAME = 'CURRENT_USERNAME';

export const storageService = (() => {
  const setCurrentUsername = (username) =>
    localStorage.setItem(CURRENT_USERNAME, username);

  const getCurrentUsername = () => localStorage.getItem(CURRENT_USERNAME);

  const getAllAnswers = () => {
    let allAnswers = _toJson(localStorage.getItem(getCurrentUsername()));
    if (!allAnswers) {
      allAnswers = {};
    }
    return allAnswers;
  };

  const saveAnswer = (questionId, answer) => {
    const answersOfUser = getAllAnswers();
    answersOfUser[questionId] = answer;
    localStorage.setItem(getCurrentUsername(), _toString(answersOfUser));
  };

  const getAnswer = (questionId) => getAllAnswers()[questionId];

  const hasAnswer = (questionId) => !!getAnswer(questionId);

  const resetUser = () =>
    localStorage.setItem(getCurrentUsername(), _toString({}));

  const deleteUser = () => localStorage.removeItem(getCurrentUsername());

  const clearStorage = () => localStorage.clear();

  const _toString = (obj) => JSON.stringify(obj);

  const _toJson = (str) => JSON.parse(str);

  return {
    setCurrentUsername,
    getCurrentUsername,
    saveAnswer,
    getAnswer,
    getAllAnswers,
    hasAnswer,
    resetUser,
    deleteUser,
    clearStorage,
  };
})();

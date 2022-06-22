export const storageService = (() => {
  const getAllAnswers = (username) =>
    _toJson(window.localStorage.getItem(username));

  const saveAnswer = (username, questionId, answer) => {
    const answersOfUser = getAllAnswers(username);
    answersOfUser[questionId] = answer;
    window.localStorage.setItem(username, _toString(answersOfUser));
  };

  const getAnswer = (username, questionId) =>
    getAllAnswers(username)[questionId];

  const hasAnswer = (username, questionId) => !!getAnswer(username, questionId);

  const resetUser = (username) =>
    window.localStorage.setItem(username, _toString('{}'));

  const deleteUser = (username) => window.localStorage.removeItem(username);

  const clearStorage = () => window.localStorage.clear();

  const _toString = (obj) => JSON.stringify(obj);

  const _toJson = (str) => {
    if (!str) {
      str = '{}';
    }
    return JSON.parse(str);
  };

  return {
    saveAnswer,
    getAnswer,
    getAllAnswers,
    hasAnswer,
    resetUser,
    deleteUser,
    clearStorage,
  };
})();

const CURRENT_USERNAME = 'CURRENT_USERNAME';
const QUESTION_ARRAY = 'QUESTION_ARRAY';
const ANSWERS = 'ANSWERS';
const SCORE = 'SCORE';

export const storageService = (() => {
  const setCurrentUsername = (username) =>
    localStorage.setItem(CURRENT_USERNAME, username);

  const getCurrentUsername = () => localStorage.getItem(CURRENT_USERNAME);

  const getUserData = () => {
    let userData = _toJson(localStorage.getItem(getCurrentUsername()));
    if (!userData) {
      userData = {};
    }
    return userData;
  };

  const saveAnswer = (questionId, answer) => {
    const userData = getUserData();
    const answers = _getAnswers(userData);
    answers[questionId] = answer;
    _saveUserData(userData);
  };

  const getAnswer = (questionId) => {
    const userData = getUserData();
    const answers = _getAnswers(userData);
    return answers[questionId];
  };

  const hasAnswer = (questionId) => !!getAnswer(questionId);

  const resetUser = () => _saveUserData({});

  const deleteUser = () => localStorage.removeItem(getCurrentUsername());

  const clearStorage = () => localStorage.clear();

  const saveUserScore = (score) => {
    const userData = getUserData();
    userData[SCORE] = score;
    _saveUserData(userData);
  };

  const getUserScore = () => getUserData()[SCORE] ?? 0;

  const resetUserScore = () => (getUserData()[SCORE] = 0);

  // it saves question id to the local storage
  const setQuestion = (questionId) => {
    const userData = getUserData();
    const questionArray = _getQuestionArray(userData);
    questionArray.push(questionId);
    _saveUserData(userData);
  };

  const getQuestionId = (questionIndex) => {
    const userData = getUserData();
    const questionArray = _getQuestionArray(userData);
    return questionArray[questionIndex];
  };

  // it checks if the current user has questions
  const hasQuestions = () => !!_getQuestionArray(getUserData()).length;

  const getQuestionCount = () => {
    const userData = getUserData();
    const questionArray = _getQuestionArray(userData);
    return questionArray.length;
  };

  const _getQuestionArray = (userData) => {
    if (!userData[QUESTION_ARRAY]) {
      userData[QUESTION_ARRAY] = [];
      _saveUserData(userData);
    }
    return userData[QUESTION_ARRAY];
  };

  const _getAnswers = (userData) => {
    if (!userData[ANSWERS]) {
      userData[ANSWERS] = {};
      _saveUserData(userData);
    }
    return userData[ANSWERS];
  };

  const _saveUserData = (userData) => {
    localStorage.setItem(getCurrentUsername(), _toString(userData));
  };

  // JSON.stringify() converts an object to the string.
  // We have to use it before saving it to the local storage.
  // Because local storage only accepts strings as input.
  const _toString = (obj) => JSON.stringify(obj);

  // JSON.parse() converts a string to a json object.
  // When we fetch a record from local storage it gives it to us as a string.
  // So we have to convert it to a json object to use it conveniently.
  const _toJson = (str) => JSON.parse(str);

  return {
    setCurrentUsername,
    getCurrentUsername,
    saveAnswer,
    getAnswer,
    getUserData,
    hasAnswer,
    resetUser,
    deleteUser,
    clearStorage,
    saveUserScore,
    getUserScore,
    resetUserScore,
    setQuestion,
    getQuestionId,
    hasQuestions,
    getQuestionCount,
  };
})();

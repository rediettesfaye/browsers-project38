const showRandomQuestions = (quizData, randomQuestionsArray ) => {


let randomIndexesOfQuestions = [];

  quizData.questions.forEach(question =>{
    let randomIndex = Math.floor(Math.random()* quizData.questions.length)
    if(!randomIndexesOfQuestions.includes(randomIndex) && randomIndexesOfQuestions.length<10){
      randomIndexesOfQuestions.push(randomIndex)
    }
  })
    randomIndexesOfQuestions.forEach(index =>{
      randomQuestionsArray.push(quizData.questions[index])
    })


}

export default showRandomQuestions
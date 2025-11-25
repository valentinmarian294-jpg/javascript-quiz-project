class Quiz {
  // YOUR CODE HERE:
  //
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    return this.correctAnswers++;
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if ((this.currentQuestionIndex = this.questions.length)) {
      return true;
    }
  }
  filterQuestionsByDifficulty(difficulty){
     if (typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3){
      return;
    }
     this.questions = this.questions.filter(question => question.difficulty === difficulty);
  }
  averageDifficulty(){
  const selectedQuestions = this.questions.filter(
      (question) => typeof question.difficulty === "number"
    );
    const totalDifficulty = selectedQuestions.reduce(
      (acc, question) => acc + question.difficulty,
      0
    );
    if (selectedQuestions.length > 0) {
      return totalDifficulty / selectedQuestions.length;
    } else {
      return 0;
    }
  }
  }
   

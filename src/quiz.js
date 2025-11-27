class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  // 2. getQuestion()

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()

  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }

  // 4. shuffleQuestions()

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  // 5. checkAnswer(answer)

  checkAnswer(answer) {
    if (answer === this.currentQuestionIndex.answer) {
      return this.correctAnswers++;
    } else {
      return this.correctAnswers
    }
  }

  // 6. hasEnded()

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if ((this.currentQuestionIndex = this.questions.length)) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 3) {
      return;
    }
    this.questions = this.questions.filter(
      (question) => question.difficulty === difficulty
    );
  }

  averageDifficulty() {
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

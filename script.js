/////////////////////////////
// CODING CHALLENGE
/*
(function() {

  // 1. Build a function constructor called Question to describe a question. A question should include:
  // a) question itself
  // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  // c) correct answer (I would use a number for this)
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 2. Create a couple of questions using the constructor
  var question1 = new Question(
    "What is the Single Responsibility Principle?",
    [
      "Telling your mom you can't clean the dishes because your single responsibility is cleaning your room",
      "Choosing between the beach and the tea house on a sunny sunday",
      "Object oriented programming principle that states a class should do only one thing"
    ],
    2
  )

  var question2 = new Question(
    "What does the acronym OOP stand for?",
    [
      "Object Oriented Programming",
      "Oriental Ornamental Parental",
      "Orange Orchard Prairie"
    ],
    0
  )

  var question3 = new Question(
    "When is it a good idea to refactor some code?",
    ["Never", "Always", "Sometimes"],
    1
  )

  // 3. Store them all inside an array
  var questionsArray = [question1, question2, question3];

  // 4. Select one random question and log it on the console, together with the possible answers(each question should have a number)(Hint: write a method for the Question objects for this task).
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  var randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  randomQuestion.displayQuestion();

  // 5. Use the 'prompt' function to ask the user for the correct answer.The user should input the number of the correct answer such as you displayed it on Task 4.
  var answer = prompt('What is the correct answer? (use the number)');

  // 6. Check if the answer is correct and print to the console whether the answer is correct ot nor(Hint: write another method for this).
  var checkAnswer = function(answer, correctAnswer) {
    if (answer == correctAnswer) {
      return console.log('Correct Answer! Good Job!');
    }
    return console.log('Wrong Answer! Stay safe!');
  };

  checkAnswer(answer, randomQuestion.correctAnswer);

  // 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
})();
*/


/*
--- Expert level ---

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.


*/

(function() {

  // 1. Build a function constructor called Question to describe a question. A question should include:
  // a) question itself
  // b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  // c) correct answer (I would use a number for this)
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  // 2. Create a couple of questions using the constructor
  var question1 = new Question(
    "What is the Single Responsibility Principle?",
    [
      "Telling your mom you can't clean the dishes because your single responsibility is cleaning your room",
      "Choosing between the beach and the tea house on a sunny sunday",
      "Object oriented programming principle that states a class should do only one thing"
    ],
    2
  )

  var question2 = new Question(
    "What does the acronym OOP stand for?",
    [
      "Object Oriented Programming",
      "Oriental Ornamental Parental",
      "Orange Orchard Prairie"
    ],
    0
  )

  var question3 = new Question(
    "When is it a good idea to refactor some code?",
    ["Never", "Always", "Sometimes"],
    1
  )

  // 3. Store them all inside an array
  var questionsArray = [question1, question2, question3];

  // 4. Select one random question and log it on the console, together with the possible answers(each question should have a number)(Hint: write a method for the Question objects for this task).
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(answer) {
    if (answer == this.correctAnswer) {
      console.log('Correct Answer! Good Job!');
      console.log('___________________');
      return true;
    } else {
      console.log('Wrong Answer! Stay safe!');
      console.log('___________________');
      return false;
    }
  };

  var Game = function(questions) {
    this.score = 0;
    this.questions = questions;
  };

  Game.prototype.randomQuestion = function() {
    return this.questions[Math.floor(Math.random() * this.questions.length)];
  };

  Game.prototype.loop = function() {
    var question = this.randomQuestion();
    question.displayQuestion();
    var answer = prompt('What is the correct answer? (use the number)');

    if (answer === 'exit') {
      console.log('Good Bye!');
      console.log('___________________');
    } else {
      result = question.checkAnswer(answer);
      if(result) this.score++;
      console.log('Your current score is: ' + this.score);
      console.log('___________________');
      this.loop();
    }
  };

  var game = new Game(questionsArray);

  game.loop();

  // 5. Use the 'prompt' function to ask the user for the correct answer.The user should input the number of the correct answer such as you displayed it on Task 4.

  // 6. Check if the answer is correct and print to the console whether the answer is correct ot nor(Hint: write another method for this).

  // 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
})();

// 8. After you display the result, display the next random question, so that the game never ends(Hint: write a function for this and call it right after displaying the result)

// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

// 11. Display the score in the console.Use yet another method for this.

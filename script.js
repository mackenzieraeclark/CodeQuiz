// RE-DO

// Startpage

// Declare global variables for timer
var timer = document.getElementById("timer");
var timeLeft = 60;
var timerInterval;



 function startQuiz() {
    // Hide Start Page and High Score page and show Quiz Page
    document.getElementById("startPage").style.display = "none";
    document.getElementById("highScoresPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    runQuiz();

    // Create Timer function
    timerInterval = setInterval(function startTimer() {
    timeLeft--;
    timer.textContent = "Time Left: " +timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        showScore();
    }
}, 1000);
}

// Quizpage

// Create an object for quiz questions
var questions = [
    {
        question: "What is",
        a: "this",
        b: "that",
        c: "the other",
        answer: "b"
    },
    {
        question: "question",
        a: "a",
        b: "b",
        c: "c",
        answer: "a"
    },
    {
        question: "question",
        a: "a",
        b: "b",
        c: "c",
        answer: "b"
    },
    {
        question: "question",
        a: "a",
        b: "b",
        c: "c",
        answer: "c"
    },
    {
        question: "question",
        a: "a",
        b: "b",
        c: "c",
        answer: "a"
    }
];

        // We will create this part of the application using indexes

// Declare other global variables
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");
var quizQuestions = document.getElementById("question");
var fullIndex = questions.length;
var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];

// Run Quiz
function runQuiz() {
    quizQuestions.textContent = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.a;
    buttonB.innerHTML = currentQuestion.b;
    buttonC.innerHTML = currentQuestion.c;
    checkAnswer();

    for(var i=0; i<fullIndex; i++) {
        currentQuestionIndex += currentQuestionIndex[i];
    }

    // Create if statement for end of questions
    if(currentQuestion === fullIndex){
        return showScore();
    }
};

// Declare other global variables
var score = 0;
var correct;

// Check Answer Function
function checkAnswer(answer) {
    // check if response is correct
    correct = questions[currentQuestion].answer;
    // create if to increase score or decrease time
    if (answer === correct && currentQuestionIndex !== fullIndex){
        score++;
        currentQuestionIndex++;
        $ ("#result").text("Correct!");
        generateQuizQuestion();
    }else if (answer !== correct && currentQuestionIndex !== fullIndex){
        timeLeft - 2;
        currentQuestionIndex++;
        $ ("#result").text("Incorrect!");
        generateQuizQuestion();
    }else{
        showScore();
    } 
};

// When quiz is complete show score

function showScore() {
    // Hide Quiz Page and show Score page
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("scorePage").style.display = "block";

    score;
};

// Submit Score

//Save Score


// View high scores

// Hide startpage and quiz

// When I click to see scores
function viewHighscores() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("highScoresPage").style.display = "block";
}

// When I click clear scores
function clearScore() {
    xxx
}







// // GIVEN I am taking a code quiz
//     // Declare initial variables
//     var submit = document.getElementById("submit");
//     var score = document.getElementById("score");

// // WHEN I click the start button
// submit.addEventListener("click", begin);

// function begin() {

// }

// // THEN a timer starts and I am presented with a question
// var timer = document.getElementById("timer");
// var secondsLeft = 60;
// var initialScore = 0;

// timer.textContent = "Time: " + secondsLeft;

// // WHEN I answer a question
// // THEN I am presented with another question


// // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock


// // WHEN all questions are answered or the timer reaches 0


// // THEN the game is over


// // WHEN the game is over
// // THEN I can save my initials and score



// // id beginQuiz, beginQuestions
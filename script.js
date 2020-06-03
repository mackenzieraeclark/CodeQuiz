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

    // Create Timer function
    timerInterval = setInterval(function startTimer() {
    timeLeft--;
    timer.textContent = "Time Left: " +timeLeft;
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    runQuiz();
};

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
    },
];

        // We will create this part of the application using indexes

// Declare other global variables
var buttonA = document.getElementById("A");
var buttonB = document.getElementById("B");
var buttonC = document.getElementById("C");

var quizQuestions = document.getElementById("questions");
var displayChoices = document.getElementById("choices");
var result = document.getElementById("result");

var fullIndex = questions.length;
var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
var score = 0;
var correct;

// Run Quiz
function runQuiz() {
    quizQuestions.textContent = currentQuestion.question;
    buttonA.textContent = currentQuestion.a;
    buttonB.textContent = currentQuestion.b;
    buttonC.textContent = currentQuestion.c;
    checkAnswer();

    for(var i=0; i<fullIndex; i++) {
        currentQuestionIndex = currentQuestionIndex + 1;
    };

    // Create if statement for end of questions
    if(currentQuestion === fullIndex){
        return showScore();
    }
};

// Check Answer Function
function checkAnswer(response) {
    // check if response is correct
    correct = questions[currentQuestion].answer;
    // create if to increase score or decrease time
    if (correct === answer && currentQuestionIndex !== fullIndex){
        score++;
        currentQuestionIndex++;
        result.text("Correct!");
        runQuiz();
    }else if (correct !== answer && currentQuestionIndex !== fullIndex){
        timeLeft - 2;
        currentQuestionIndex++;
        result.text("Incorrect!");
        runQuiz();
    }else{
        showScore();
    } 
};

// When quiz is complete show score

var finalScore = document.getElementById("score");

function showScore() {
    // Hide Quiz Page and show Score page
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("scorePage").style.display = "block";
    
    clearInterval(timerInterval);

    finalScore.innerHTML = "You scored " + score + " out of " + questions.length;
};

// Submit Score
var highscoreInputName = document.getElementById("initials");

function submitResponse() {
    // Hide Quiz Page and show Score page
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("scorePage").style.display = "block";

    highscoreInputName.value = "";

    if(highscoreInputName.value == ""){
        alert("Initials connot be blank");
        return false;
    } else {
        var saveHighScores = JSON.parse(localStorage.getItem("saveHighScores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighSCore = {
            name: currentUser,
            score: score
        };

        saveHighScores.push(currentHighSCore);
        localStorage.setItem("savedHighScores", JSON.stringify(saveHighScores));
        generateHighscores();
    }

};


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
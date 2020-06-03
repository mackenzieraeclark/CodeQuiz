// RE-DO

// Startpage
function startQuiz() {
    // Hide Start Page and show Quiz Page
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
}


// Quizpage

// Hide startpage and highscores

// Create an object for quiz questions

var questions = [
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
]

// Check Answer Function
function checkAnswer() {
    // check if response is correct
    // increase or decrease score
}



// View high scores

// Hide startpage and quiz

// When I click to see scores
function viewHighscores() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("highScoresPage").style.display = "block";
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
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
        question: "Which is the correct Javascript syntax? for a <p> with id'hello'",
        a: "document.getElementbyName('hello') = 'Hello!' ",
        b: "document.getElementbyId('hello') = 'Hello!' ",
        c: "document.getElementbyId('p') = 'Hello!' ",
        answer: "b"
    },
    {
        question: "Where is Javascript inserted in the HTML document?",
        a: "only in the <head> section",
        b: "only in the <body> section",
        c: "both the <head> and <body> section",
        answer: "c"
    },
    {
        question: "Where do we put Javascript within HTML?",
        a: "<js>",
        b: "<script>",
        c: "<create-js>",
        answer: "b"
    },
    {
        question: "How would you alert 'HELLO' in Javascript?",
        a: "mssg('HELLO')",
        b: "callOutToUser('HELLO')",
        c: "alert('HELLO')",
        answer: "c"
    },
    {
        question: "How do you create a function in Javascript?",
        a: "function myFunction()",
        b: "myFunction() function()",
        c: "function(myFunction)",
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


function generateHighscores() {
    highscoreInputName.innerHTML = "";
    finalScore.innerHTML = "";

    var highScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for(var i=0; i<highScores.length; i++) {
        var newInitial = document.createElement("li");
        var newScore = document.createElement("li");
        newInitial.textContent = highScores[i].name;
        newScore.textContent = highScores[i].score;
        highscoreInputName.appendChild(newInitial);
        finalScore.appendChild(newScore);
    }
};

// View high scores

// Hide startpage and quiz

// When I click to see scores
function viewHighscores() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("highScoresPage").style.display = "block";
    generateHighscores();
};

// When I click clear scores
function clearScore() {
    window.localStorage.clear();
    highscoreInputName.textContent = "";
    finalScore.textContent = "";
};
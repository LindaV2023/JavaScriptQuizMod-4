const question = document.getElementById("question");
const picks = Array.from(document.getElementsByClassName("pick-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {

    question: "Arrays in JavaScript can be used to store _________",
    pick1: "Numbers and strings",
    pick2: "Other arrays",
    pick3: "Booleans",
    pick4: "All of the above",
    answer: 4
    },

    {
    question: "Commonly used data types do NOT include:",
    pick1: "Strings",
    pick2: "Booleans",
    pick3: "Alerts",
    pick4: "Numbers",
    answer: 3
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    pick1: "JavaScripts",
    pick2: "Terminal/Bash",
    pick3: "For loops",
    pick4: "Console log",
    answer: 4
    },

    {
    question: "String values must be enclosed within ______________ when being assigned to variables",
    pick1: "Commas",
    pick2: "Curly brackets",
    pick3: "Quotes",
    pick4: "Parenthesis",
    answer: 3
    },

    {
     question: "The condition in an if/else statement is enclosed with _________",
    pick1: "Parenthesis",
    pick2: "Quotes",
    pick3: "Curly brackes",
    pick4: "Square brackets",
    answer: 1
    },

];




const CORRECT_POINTS = 1;
const MAX_QUESTIONS = 5;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
  // console.log (availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

   

    picks.forEach(pick => {
        const number = pick.dataset['number'];
        pick.innerText = currentQuestion["pick" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

picks.forEach(pick => {
    pick.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedPick = e.target;
        const selectedAnswer = selectedPick.dataset['number'];
       // console.log(selectedAnswer, currentQuestion.answer);
       

       const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
       console.log(classToApply);

     if (classToApply === 'correct') {
         incrementScore(CORRECT_POINTS);
     } 

       selectedPick.parentElement.classList.add(classToApply);

       setTimeout(() => {
        selectedPick.parentElement.classList.remove(classToApply);
        getNewQuestion();
       }, 1000);

       });
    });

    incrementScore = num => {
        score += num;
        scoreText.innerText = score;
    }

startQuiz();
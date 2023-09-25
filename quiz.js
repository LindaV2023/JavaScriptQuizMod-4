const question = document.getElementById("question");
const picks = Array.from(document.getElementsByClassName("pick-text"));

let currentQuestion = {};
let acceptingAnswers = true;
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
    answer: 4,
    },

    {
    question: "Commonly used data types do NOT include:",
    pick1: "Strings",
    pick2: "Booleans",
    pick3: "Alerts",
    pick4: "Numbers",
    answer: 3,
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    pick1: "JavaScripts",
    pick2: "Terminal/Bash",
    pick3: "For loops",
    pick4: "Console log",
    answer: 4,
    },

    {
    question: "String values must be enclosed within ______________ when being assigned to variables",
    pick1: "Commas",
    pick2: "Curly brackets",
    pick3: "Quotes",
    pick4: "Parenthesis",
    answer: 3,
    },

    {
     question: "The condition in an if/else statement is enclosed with _________",
    pick1: "Parenthesis",
    pick2: "Quotes",
    pick3: "Curly brackes",
    pick4: "Square brackets",
    answer: 1,
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

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

   

    picks.forEach((pick) => {
        const number = pick.dataset['number'];
        choice.innerText = currentQuestion["pick" + number];
    });

    acceptingAnswers = true;
};

picks.forEach((pick) => {
    pick.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;;
        const selectedPick = e.target;
        const selectedAnswer = selectedPick.dataset['number'];
        getNewQuestion();
    });
});

startQuiz();
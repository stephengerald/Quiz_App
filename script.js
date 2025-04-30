const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerText = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.innerText = `Your score: ${score} / ${quizData.length}`;
    scoreElement.classList.remove("hidden");
}

loadQuestion();
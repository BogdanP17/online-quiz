const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("text"));
console.log(choices);

let currectQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who win 2019 world cup?",
        option1: "Argentina",
        option2 : "France",
        answer: "Argentina"
    },
    {
        question: "Who is Connor McGreggor?",
        option1: "MMA Fighter",
        option2: "F1 Driver",
        answer: "MMA Figher"
    },
    {
        question: "Leo Meesi is a ?",
        option1: "Football Player",
        option2: "Actor",
        answer: "Football Player"
    }

];

const maxQuestions = 3;
const bonus = 10;

function game() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    newQuestions();
}

function newQuestions(){
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currectQuestion = availableQuestions[questionIndex];
    question.innerText = currectQuestion.question;
    console.log(currectQuestion);
    choices.forEach ( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currectQuestion['option' + number];
    });
};

game();
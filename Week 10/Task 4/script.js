(function () {
    function buildQuiz() {
        document.getElementById("startQuiz").style.visibility = "hidden";

        // document.getElementById("submitQuiz").style.visibility = "visible";

        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");

        startTimer();
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
 
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            }
        });

        quizContainer.innerHTML = `<h2>You scored: ${numCorrect} / ${myQuestions.length}</h2>`;

        clearInterval(timer);
    }

    function startTimer() {

        let timeLeft = 10;
        const timerDisplay = document.createElement("div");
        timerDisplay.id = "timer";

        quizContainer.prepend(timerDisplay);

        timer = setInterval(() => {
            timerDisplay.innerHTML = `Time remaining: ${timeLeft} seconds`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timer);
                showResults();
            }
        }, 1000);
    }

    const quizContainer = document.getElementById("quiz");
    const myQuestions = [
        {
            question: "What is the capital of France?",
            answers: {
                a: "Warsaw<br>",
                b: "Vienna<br>",
                c: "Paris<br>"
            },
            correctAnswer: "c"
        },
        {
            question: "Which language is primarily used for web development?",
            answers: {
                a: "Python<br>",
                b: "JavaScript<br>",
                c: "Java<br>"
            },
            correctAnswer: "b"
        },
        {
            question: "Which planet is the largest in our solar system?",
            answers: {
                a: "Mars<br>",
                b: "Neptune<br>",
                c: "Jupiter<br>"
            },
            correctAnswer: "c"
        }
    ];

    document.getElementById("startQuiz").addEventListener("click", buildQuiz);
    document.getElementById("submitQuiz").addEventListener("click", showResults);
})();

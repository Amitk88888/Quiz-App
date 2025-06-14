// ===== Question Data =====
const htmlQuestions = [
    {
        "question": "What does HTML stand for?",
        "options": [
            "A) Hyper Text Markup Language",
            "B) High Tech Machine Learning",
            "C) Home Tool Management Language",
            "D) Hyperlink Text Markup Logic"
        ],
        "answer": "A) Hyper Text Markup Language"
    },
    {
        "question": "Which tag is used to create a hyperlink in HTML?",
        "options": [
            "A) <link>",
            "B) <a>",
            "C) <href>",
            "D) <hlink>"
        ],
        "answer": "B) <a>"
    },
    {
        "question": "What is the correct HTML element for inserting a line break?",
        "options": [
            "A) <br>",
            "B) <break>",
            "C) <lb>",
            "D) <hr>"
        ],
        "answer": "A) <br>"
    },
    {
        "question": "Which HTML tag is used to define an unordered list?",
        "options": [
            "A) <ul>",
            "B) <ol>",
            "C) <li>",
            "D) <list>"
        ],
        "answer": "A) <ul>"
    },
    {
        "question": "Which tag is used to define a table row in HTML?",
        "options": [
            "A) <td>",
            "B) <tr>",
            "C) <th>",
            "D) <table>"
        ],
        "answer": "B) <tr>"
    },
    {
        "question": "Which attribute is used to specify an image source in HTML?",
        "options": [
            "A) href",
            "B) src",
            "C) alt",
            "D) link"
        ],
        "answer": "B) src"
    },
    {
        "question": "Which HTML tag is used to make text bold?",
        "options": [
            "A) <bold>",
            "B) <strong>",
            "C) <b>",
            "D) <em>"
        ],
        "answer": "C) <b>"
    },
    {
        "question": "What is the default file extension for an HTML document?",
        "options": [
            "A) .htm",
            "B) .html",
            "C) .txt",
            "D) .doc"
        ],
        "answer": "B) .html"
    },
    {
        "question": "Which tag is used to define metadata in an HTML document?",
        "options": [
            "A) <script>",
            "B) <meta>",
            "C) <head>",
            "D) <data>"
        ],
        "answer": "B) <meta>"
    },
    {
        "question": "What is the purpose of the <title> tag in HTML?",
        "options": [
            "A) To display a title inside the body",
            "B) To define the document's title in the browser tab",
            "C) To make text bold",
            "D) To create a heading"
        ],
        "answer": "B) To define the document's title in the browser tab"
    }
]


const cssQuestions = [
    {
        "question": "What does CSS stand for?",
        "options": [
            "A) Creative Style Sheets",
            "B) Computer Style Sheets",
            "C) Cascading Style Sheets",
            "D) Colorful Style Sheets"
        ],
        "answer": "C) Cascading Style Sheets"
    },
    {
        "question": "Which property is used to change the background color in CSS?",
        "options": [
            "A) bgcolor",
            "B) color",
            "C) background-color",
            "D) background"
        ],
        "answer": "C) background-color"
    },
    {
        "question": "Which CSS property controls the text size?",
        "options": [
            "A) text-size",
            "B) font-style",
            "C) text-style",
            "D) font-size"
        ],
        "answer": "D) font-size"
    },
    {
        "question": "How do you add a border in CSS?",
        "options": [
            "A) border: 1px solid black;",
            "B) border-width: 1px;",
            "C) border-style: solid;",
            "D) border-color: black;"
        ],
        "answer": "A) border: 1px solid black;"
    },
    {
        "question": "Which property is used to make text bold?",
        "options": [
            "A) text-style",
            "B) font-weight",
            "C) font-bold",
            "D) text-bold"
        ],
        "answer": "B) font-weight"
    },
    {
        "question": "What is the default position of elements in CSS?",
        "options": [
            "A) static",
            "B) relative",
            "C) absolute",
            "D) fixed"
        ],
        "answer": "A) static"
    },
    {
        "question": "Which CSS property is used to create space between elements?",
        "options": [
            "A) padding",
            "B) spacing",
            "C) margin",
            "D) gap"
        ],
        "answer": "C) margin"
    },
    {
        "question": "Which property is used to set the text alignment in CSS?",
        "options": [
            "A) align-text",
            "B) text-align",
            "C) text-style",
            "D) font-align"
        ],
        "answer": "B) text-align"
    },
    {
        "question": "Which value makes an element hidden but still takes up space?",
        "options": [
            "A) display: none;",
            "B) visibility: hidden;",
            "C) opacity: 0;",
            "D) hidden: true;"
        ],
        "answer": "B) visibility: hidden;"
    },
    {
        "question": "What is the correct way to apply an external CSS file?",
        "options": [
            "A) <style src='styles.css'>",
            "B) <css href='styles.css'>",
            "C) <link rel='stylesheet' href='styles.css'>",
            "D) <script src='styles.css'>"
        ],
        "answer": "C) <link rel='stylesheet' href='styles.css'>"
    }
]

const mathQuestions =[
    {
        "question": "What is JavaScript primarily used for?",
        "options": [
            "A) Styling web pages",
            "B) Structuring web pages",
            "C) Adding interactivity to web pages",
            "D) Managing databases"
        ],
        "answer": "C) Adding interactivity to web pages"
    },
    {
        "question": "Which keyword is used to declare a variable in JavaScript?",
        "options": [
            "A) var",
            "B) let",
            "C) const",
            "D) All of the above"
        ],
        "answer": "D) All of the above"
    },
    {
        "question": "Which operator is used for strict equality comparison?",
        "options": [
            "A) ==",
            "B) ===",
            "C) =",
            "D) !="
        ],
        "answer": "B) ==="
    },
    {
        "question": "How do you write a comment in JavaScript?",
        "options": [
            "A) // This is a comment",
            "B) <!-- This is a comment -->",
            "C) /* This is a comment */",
            "D) Both A and C"
        ],
        "answer": "D) Both A and C"
    },
    {
        "question": "Which function is used to print content in the console?",
        "options": [
            "A) print()",
            "B) log()",
            "C) console.log()",
            "D) display()"
        ],
        "answer": "C) console.log()"
    },
    {
        "question": "What is the correct way to define an arrow function?",
        "options": [
            "A) function() => {}",
            "B) () => {}",
            "C) => function() {}",
            "D) {} => ()"
        ],
        "answer": "B) () => {}"
    },
    {
        "question": "What will `typeof null` return in JavaScript?",
        "options": [
            "A) null",
            "B) undefined",
            "C) object",
            "D) string"
        ],
        "answer": "C) object"
    },
    {
        "question": "Which method is used to remove the last element from an array?",
        "options": [
            "A) pop()",
            "B) push()",
            "C) shift()",
            "D) unshift()"
        ],
        "answer": "A) pop()"
    },
    {
        "question": "How do you declare an asynchronous function in JavaScript?",
        "options": [
            "A) async function myFunc() {}",
            "B) function async myFunc() {}",
            "C) function myFunc async() {}",
            "D) async: function myFunc() {}"
        ],
        "answer": "A) async function myFunc() {}"
    },
    {
        "question": "Which of the following is a JavaScript framework?",
        "options": [
            "A) React",
            "B) Laravel",
            "C) Django",
            "D) Flask"
        ],
        "answer": "A) React"
    }
]

const javaQuestions = [
    {
        "question": "What is Java?",
        "options": [
            "A) A programming language",
            "B) A database management system",
            "C) An operating system",
            "D) A text editor"
        ],
        "answer": "A) A programming language"
    },
    {
        "question": "Which company developed Java?",
        "options": [
            "A) Microsoft",
            "B) Apple",
            "C) Sun Microsystems",
            "D) Google"
        ],
        "answer": "C) Sun Microsystems"
    },
    {
        "question": "Which keyword is used to define a class in Java?",
        "options": [
            "A) define",
            "B) class",
            "C) struct",
            "D) Class"
        ],
        "answer": "B) class"
    },
    {
        "question": "Which method is the entry point of a Java program?",
        "options": [
            "A) main()",
            "B) start()",
            "C) run()",
            "D) execute()"
        ],
        "answer": "A) main()"
    },
    {
        "question": "Which of the following is not a Java primitive data type?",
        "options": [
            "A) int",
            "B) float",
            "C) boolean",
            "D) string"
        ],
        "answer": "D) string"
    },
    {
        "question": "Which operator is used to compare two values in Java?",
        "options": [
            "A) ==",
            "B) =",
            "C) !=",
            "D) &&"
        ],
        "answer": "A) =="
    },
    {
        "question": "Which keyword is used to inherit a class in Java?",
        "options": [
            "A) extend",
            "B) implements",
            "C) inherit",
            "D) super"
        ],
        "answer": "A) extend"
    },
    {
        "question": "Which of the following is a loop in Java?",
        "options": [
            "A) for",
            "B) foreach",
            "C) while",
            "D) All of the above"
        ],
        "answer": "D) All of the above"
    },
    {
        "question": "Which of the following is NOT a Java access modifier?",
        "options": [
            "A) private",
            "B) protected",
            "C) static",
            "D) public"
        ],
        "answer": "C) static"
    },
    {
        "question": "What is the default value of an int variable in Java?",
        "options": [
            "A) 0",
            "B) 1",
            "C) null",
            "D) Undefined"
        ],
        "answer": "A) 0"
    }
];


// ===== Determine Quiz Type =====
const quizType = localStorage.getItem("quizType");

let questions = [];
switch (quizType) {
    case "html":
        questions = htmlQuestions;
        break;
    case "css":
        questions = cssQuestions;
        break;
    default:
        questions = mathQuestions; // Default to Math if none selected
}

// ===== Quiz State Variables =====
let currentQuestionIndex = 0;
let score = 0;
let attempted = 0;
let startTime = Date.now();

// ===== Display Question =====
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        displayResult(); // Show result after last question
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("quiz-question").innerText = questionData.question;

    const optionsContainer = document.querySelector(".options");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("btn_2");
        button.innerText = option;
        button.onclick = () => checkAnswer(option, questionData.answer);
        optionsContainer.appendChild(button);
    });

    document.querySelector(".number").innerText = `${currentQuestionIndex + 1}/${questions.length}`;
}

// ===== Check Selected Answer =====
function checkAnswer(selectedOption, correctAnswer) {
    attempted++;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// ===== Display Quiz Result in result.html =====
function displayResult() {
    const endTime = Date.now();
    const totalTime = Math.floor((endTime - startTime) / 1000); // Time in seconds
    const candidateName = localStorage.getItem("username") || "User"; // Retrieve the name

    const resultData = {
        candidateName,
        totalTime,
        totalQuestions: questions.length,
        attempted,
        correct: score,
        wrong: attempted - score,
        percentage: ((score / questions.length) * 100).toFixed(2)
    };

    localStorage.setItem("quizResult", JSON.stringify(resultData));
    window.location.href = "result.html"; // Redirect to result page
}

// ===== Initialize Quiz on Page Load =====
window.onload = displayQuestion;

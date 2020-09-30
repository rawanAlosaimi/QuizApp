const quizData = [{
    question: 'What does HTML stand for?',
    a: 'Home Tool Markup Languge',
    b: 'Hyperlinks and Text Markup Languge',
    c: 'Hyper Text Markup Languge',
    d: 'none of above',
    answer: 'c'
}, {
    question: 'Choose the correct HTML element for the largest heading',
    a: '< h1 >',
    b: '< head >',
    c: '< heading >',
    d: '< h6 >',
    answer: 'a'
}, {
    question: 'What is the correct HTML element for inserting a line break?',
    a: '< br >',
    b: '< lb >',
    c: '< break >',
    d: '< hr >',
    answer: 'a'
}, {
    question: 'What is the correct HTML for adding a background color?',
    a: '< body background= "yellow" >',
    b: '< body style = "background-color : yellow" >',
    c: '< background > yellow < / background >',
    d: 'All of the above',
    answer: 'b'
}, {
    question: 'Which character is used to indicate an end tag?',
    a: '*',
    b: '/',
    c: '^',
    d: '<',
    answer: 'b'
}];

const quiz = document.getElementById('quiz');
const question = document.getElementById('Question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {

        if (answer === quizData[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
                var style = document.createElement('style');
                style.innerHTML = `
     body {
        background-image: url(imgs/finish.jpg);
        min-height: 100vh;
        background-size: cover;
        background-position: center center;
      }
    
      .quiz-container{
          padding-top: 5rem;
          text-align: center;
      }

      button{
        margin-top: 4rem;
      }

      @media (max-width: 900px){
        body {
            background-image: url(imgs/finish.jpg);
            min-height: 100vh;
            background-size: cover;
            background-position: center center;
          }
          .quiz-container{
            width: 500px;
        }
        #Question{
            font-size: 1.3rem;
        }
      }
      `;
      document.head.appendChild(style);
      quiz.innerHTML = '<h2> You answerd correctly at ' +
          score + '/' + quizData.length + ' questions </h2>  <button onClick="location.reload()">Reload</button>';
        }
    } else {
        alert('You must choose an answer to go to the next question.');


    }


});
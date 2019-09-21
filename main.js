'use strict';

/* User Stories
        A user will be presented a start button to start the game.

        A question will be populated on the page.

        The total amount of questions will be shown in the Question Tracker.

        One of four answers can be selected for any given question.

        Upon submission the next question will be presented to the user.

        The question tracker will update after each question
            The current question # out of the total number of questions
            Updating the just answered question with green or red to provide correct or incorrect feedback

        At the end of the game the user will be presented their final score.
            7 or less will render failure text
            8 or more will render successful text
        
        User will be presented with a button to play again.

        No navigation of quesitons!!!
*/

// Question Tracking Array
let dataSet = sportsQuestions.slice();
const totalQuestions = dataSet.length;
const choosenQuestionSet = [];
const totalCorrectAnswers = [];

function startGame() {
    $('.start').on('click', function(event) {
        renderQuestionAndAnswers();
    });
}

function generateRandomQuestion(questions) {
    /* pseudocode ----
        Generate a random question from the passed through array
            keep track of selected questions to prevent duplication
    */
    console.log('generating random question');
    let unique = true;
    let num = Math.floor(Math.random() * questions.length);
    const question = questions.splice(num, 1);
  
    // check if the current question has already been choosen and is present in the choosenQuestionSet array
    let questionExists = choosenQuestionSet.find(q => q == question);
    
    if (questionExists == true) {
        generateRandomQuestion();
        unique = false;

    } else {
        choosenQuestionSet.push(question);
        const questionIndex = choosenQuestionSet.findIndex(index => index == question);
        return choosenQuestionSet[questionIndex][0];
    }
}

function generateAnsHTML(answers) {
    console.log('Answer HTML has been generated.');
    for(let i=0; i<answers.length; i++) {
        answers[i] = `<input type="radio" id="${answers[i]}" name="answers" value="${answers[i]}">\r<label for="${answers[i]}">${answers[i]}</label>`;
    }
    answers = answers.join('');
    return answers;
}

function generateAnswers(question) {
    // This function is responsible for generating a form
    // containing 4 possible answers to the current question.
    console.log('This question\'s answers have been generated.');

    const answersObjArr = Object.entries(question);
    const answers = [];
    const randomTracker = [];
    let rExists;
    let random = 0;

        for(let i = 2; i<answersObjArr.length;){

            random = Math.floor(Math.random() * (5 - 2 + 1) + 2);
            rExists = randomTracker.find(r => r == random);

            if (rExists == random) {
                random = Math.floor(Math.random() * (5 - 2 + 1) + 2);
                rExists = randomTracker.find(r => r == random);
            } else {
                randomTracker.push(random);
                answers.push(answersObjArr[random][1].a);
                i++;
            }
        }

    const answersHTML = generateAnsHTML(answers);
    return answersHTML;
}

function renderQuestionAndAnswers() {
    // This function is repsonsible for rendering one(1) question to the DOM
    /* pseudocode-----
        For one(1) random question in dataSet, generate a string and h2
            The question should be rendered as inner text
    */

    if(choosenQuestionSet.length == totalQuestions) {
        finalScore();
    } else {
        console.log('`renderQuestion` ran');
        const currentQuestion = generateRandomQuestion(dataSet);
        const currentAnswers = generateAnswers(currentQuestion);

            // insert question into the DOM
        $('.js-questionContainer').html(`<h2>${currentQuestion.question}</h2><form><div class="answers js-answers"></div><button id="answerSubmit" type="submit">Submit Answer</button></form>`);
        
        $('.js-answers').html(currentAnswers);
    }
}

function renderTotalQuestions() {
    // populate total questions in the DOM
    console.log('Total questions rendered.')
    $('.js-questionTracker').html(`<h3><span class="js-counter"></span>/${totalQuestions} Questions</h3>`);
}

function updateQuestionCounter() {
    console.log('`renderQuestionCounter` ran');
    const questionCounter = choosenQuestionSet.length;
    // insert question count into DOM
    $('.js-counter').html(questionCounter);

}

function questionListHTML() {
    const questionListItems = [];
    for(let i = 1; i <= totalQuestions; i++) {
        questionListItems.push(`<li id="js-q${i}" class="questionListItem">Question ${i}</li>`);
    }
    const questionListItemsString = questionListItems.join('');
    
    const questionListString = `<ul class='questionList'>${questionListItemsString}</ul>\r`;
    
    return questionListString;
}

function renderQuestionList() {
    // This function is responsible for rendering the total question in a list format for score tracking.
    console.log('`renderQuestionList` ran');
    const questionListStringHTML = questionListHTML();

    $('.js-questionTracker').append(questionListStringHTML);
}

function getCorrectAnswer() {
    const numQuestions = choosenQuestionSet.length;
    const selectedQuestion = choosenQuestionSet[numQuestions - 1];
    const correctAnswer = selectedQuestion[0]["a1"]["a"];

    return {
        answer: correctAnswer,
        length: numQuestions
    }
}

function answerSelection(selectedAnswer) {
    // This function is responsible for listening for the selected answer and
    // preventing multiple selections
    console.log('`answerSelection` ran');
    console.log(selectedAnswer.val());
    return selectedAnswer.val();
}

function answerSubmission() {
    // This function is responsible for handling the answer selection
    console.log('`answerSubmission` ran');

    $('section').on('click', '#answerSubmit', function(event) {
        
        event.preventDefault();

        // validation that an answer has been selected.
        if($('input[name="answers"]:checked').length === 0){
            alert('Please select an answer');
            return false;
        } else {
            const selected = $('input[type="radio"][name="answers"]:checked');
            const submittedAnswer = answerSelection(selected);
            const gradeResult = answerChecker(submittedAnswer);
            
            answerFeedback(gradeResult);
            
            renderQuestionAndAnswers();
            updateQuestionCounter();
        }
    });
}

function answerFeedback(result) {
    // This function is responsible for tracking the current quesiton # vs 
    // total # of questions
    console.log('`questionTracker` ran');
    
    let answer = getCorrectAnswer()['answer'];

    let popup = '<div class="answerPopup"><div class="answerFeedback">';
    

    if (result === true) {
        popup += '<h1 class="answerFeedbackTitle">Great Job!!<p class="correctAnswer">You\'ve selected the correct answer.</p>';
        popup += '<button class="nextQuestion">Next ></button></div></div>';
        $('body').prepend(popup);
        $('.answerPopup').css('display','block');
        console.log('answered question correctly.');
    } else {
        popup += `<h1 class="answerFeedbackTitle">Incorrect!!<p class="correctAnswer">The correct answer to this question is: ${answer}</p>`;
        popup += '<button class="nextQuestion">Next ></button></div></div>';
        $('body').prepend(popup);
        $('.answerPopup').css('display','block');
        console.log('answered question incorrectly.');
    }
}

function answerChecker(answer) {
    // This function will check each question's answer upon submission
    // This will also result in a visual representation to show correct and incorrect answers
    console.log('`answerChecker` ran');
    let correctAnswer = getCorrectAnswer()['answer'];
    let numQuestion = getCorrectAnswer()['length'];
    
    
    if (answer === correctAnswer) {
        $(`#js-q${numQuestion}`).addClass('correct');
        totalCorrectAnswers.push(numQuestion);
        return true;
    } else {
        $(`#js-q${numQuestion}`).addClass('incorrect');
        return false;
    }
}

function closeAnswerFeedback() {
    $('body').on('click', '.nextQuestion', function() {
            $('.answerPopup').remove();
    });
}

function finalScore() {
    // This function is responsible for showing the user a pass/fail result
    // and their final score.
    console.log('game over');
    const numCorrect = totalCorrectAnswers.length;

    if(numCorrect <= (Math.floor(totalQuestions * 0.6))) {
        $('.questionContainer').html(`Unfortunely, you need to brush up on your sports knowledge. You finished with a score of ${numCorrect} out of ${totalQuestions} questions. Better luck next time!`);   
    } else if (numCorrect == (Math.floor(totalQuestions * 0.7))) {
        $('.questionContainer').html(`You\'re sports knowledge is fairly mediocre; but better than most. You finished with a score of ${numCorrect} out of ${totalQuestions} questions. Do better next time!`);  
    } else {
        $('.questionContainer').html(`You\'re amongst the G.O.A.T.s when it comes to your sports knowledge. Congratulations... You finished with a score of ${numCorrect} out of ${totalQuestions} questions!!`); 
    }

    $('.questionContainer').append('<button class="restart">Start Over</button>');
}

function restartGame() {
    $('.questionContainer').on('click', '.restart', function(event) {
        dataSet = [];
        choosenQuestionSet.length = 0;
        dataSet = sportsQuestions.slice();
        renderTotalQuestions();
        updateQuestionCounter();
        renderQuestionList();
        renderQuestionAndAnswers();
    });
}

function handleSportsGame() {
    console.log('startGame');
    // callback function
    // This function is responsible for starting and restarting the game.
    renderTotalQuestions();
    updateQuestionCounter();
    renderQuestionList();
    startGame();
    answerSubmission();
    closeAnswerFeedback();
    restartGame();
}

// when the page loads call startGame
$(handleSportsGame);
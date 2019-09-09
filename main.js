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

// Question set (data model)
const sportsQuestions = [
    {
        id: cuid(),
        question: 'Who\'s the Greatest Basketball Player of All Time?',
        a1: 'Bill Russel',
        a2: 'Kareem Abdul-Jabar',
        a3: 'Michael Jordan', //correct
        a4: 'Lebron James'
    },
    {
        id: cuid(),
        question: 'Who holds the career record for most interceptions thrown?',
        a1: 'Tom Brady',
        a2: 'Payton Manning',
        a3: 'Dan Marino',
        a4: 'Brett Farve' //correct
    },
    {
        id: cuid(),
        question: 'How many yards did the NFLs leading rusher amass during their career?',
        a1: '14,748',
        a2: '18,355', //correct
        a3: '21,781',
        a4: '17,913'
    },
    {
        id: cuid(),
        question: 'How many points did Kobe Bryant score in his final NBA game?',
        a1: 24,
        a2: 16,
        a3: 60, //correct
        a4: 81
    },
    {
        id: cuid(),
        question: 'What is the men\'s and women\'s world record in the 100m dash?',
        a1: '9.58s / 10.49s',
        a2: '8.97s / 10.78s',
        a3: '9.45s / 9.97s',
        a4: '10.49s / 11.32s '
    },
    {
        id: cuid(),
        question: 'What\'s the world record for most medals won at a single Olympic Games by an individual?',
        a1: 6,
        a2: 8,
        a3: 9,
        a4: 2
    },
    {
        id: cuid(),
        question: 'How long was the longest tennis match in history?',
        a1: '3 hours and 18 minutes',
        a2: '5 hours and 28 minutes',
        a3: '13 hours and 47 minutes',
        a4: '11 hours and 5 minutes' //correct
    },
    {
        id: cuid(),
        question: 'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
        a1: '1985, Chicago Bears',
        a2: '1972, Miami Dolphins', //correct
        a3: '2007, New England Patriots',
        a4: '1973, Miami Dolphins'
    },
    {
        id: cuid(),
        question: 'How is soccer player Edson Arantes do Nascimento better known?',
        a1: 'Neymar',
        a2: 'Ronaldinho',
        a3: 'Garrincha',
        a4: 'Pele' //correct
    },
    {
        id: cuid(),
        question: 'Which country won the first ever soccer World Cup in 1930?',
        a1: 'Mexico',
        a2: 'United States',
        a3: 'Uruguay', //correct
        a4: 'Germany'
    }
]

// Question Tracking Array
const choosenQuestionSet = [];

// ----------------------------END OF DATA MODEL----------------------------------

function generateRandomQuestion(questions) {
    /* pseudocode ----
        Generate a random question from the passed through array
            keep track of selected questions to prevent duplication
    */
    console.log('generating random question');
    let unique = true;
    let num = Math.floor(Math.random() * questions.length);
    const question = questions.splice(num, 1);
    debugger;

    // check if the current question has already been choosen and is present in the choosenQuestionSet array
    let questionExists = choosenQuestionSet.find(q => q == question);
    
    if (questionExists == true) {
        debugger;
        generateRandomQuestion();
        unique = false;
        debugger;
    } else {
        choosenQuestionSet.push(question);
        debugger;
        return (choosenQuestionSet[choosenQuestionSet.length - 1]).question;
    }
}

function renderQuestion() {
    // This function is repsonsible for rendering one(1) question to the DOM
    /* pseudocode-----
        For one(1) random question in sportsQuestions, generate a string and h2
            The question should be rendered as inner text
    */
   console.log('`renderQuestion` ran');
   const currentQuestion = generateRandomQuestion(sportsQuestions);

    // insert question into the DOM
   $('.js-questionContainer').html(currentQuestion.question); 
}

function renderQuestionCount() {
    // This function is responible for rendering the current question # vs total qustions
    console.log('`renderQuestionCount` ran');
}

function renderQuestionList() {
    // This function is responsible for rendering the total question in a list format for score tracking.
    console.log('`renderQuestionList` ran');
}

function answerSelection() {
    // This function is responsible for listening for the selected answer and
    // preventing multiple selections
    console.log('`anserSelection` ran');
}

function answerSubmission() {
    // This function is responsible for handling the answer selection
    console.log('`answerSubmission` ran');
}

function questionTracker() {
    // This function is responsible for tracking the current quesiton # vs 
    // total # of questions
    console.log('`questionTracker` ran');
}

function answerChecker() {
    // This function will check each questions answer upon submission
    // This will also result in a visual representation to show correct and incorrect answers
    console.log('`answerChecker` ran');
}

function finalScore() {
    // This function is responsible for showing the user a pass/fail result
    // and their final score.

}

function startGame() {
    // callback function
    // This function is responsible for starting and restarting the game.
    renderQuestion();
    renderQuestionCount();
    renderQuestionList();
    answerSelection();
    answerSubmission();
    questionTracker();
    answerChecker();
    finalScore();
}

// when the page loads call startGame
$(startGame);
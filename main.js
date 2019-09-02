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

// Question set (data)
const sportsQuestions = [
    {
        id: cuid(),
        question: 'Who\'s the Greatest Basketball Player of All Time?',
        a1: 'Bill Russel',
        a2: 'Kareem Abdul-Jabar',
        a3: 'Michael Jordan',
        a4: 'Lebron James'
    },
    {
        id: cuid(),
        question: 'Who holds the career record for most interceptions thrown?',
        a1: 'Tom Brady',
        a2: 'Payton Manning',
        a3: 'Dan Marino',
        a4: 'Brett Farve'
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
    {
        id: cuid(),
        question: ,
        a1: ,
        a2: ,
        a3: ,
        a4:
    },
]

function renderQuestion() {
    // This function is repsonsible for rendering the current question
    console.log('`renderQuestion` ran');
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
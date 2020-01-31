/* This is a quiz application with 5 questions
 After each correct question a plpayer gets 1 point
Player is rated with a ranking at end of the game. From 1st to 5th place
 */
var playerScore = 0;
var correct = false;

// 5 questions for user

var questionOne = prompt('How many states in United States?');

if (parseInt(questionOne) === 50) {
    playerScore++;
}

var questionTwo = prompt('How many hours in one day?');

if (parseInt(questionTwo) === 24) {
    playerScore++;
}

var questionThree = prompt('How many sides does a triangle have?');

if (parseInt(questionThree) === 3) {
    playerScore++;
}

var questionFour = prompt('How many minutes in an hour?');

if (parseInt(questionFour) === 60) {
    playerScore++;
}

var questionFive = prompt('What does US stand for?');

if (questionFive.toUpperCase() === 'UNITED STATES') {
    playerScore++;
}



document.write('<p>Your score is ' + playerScore);
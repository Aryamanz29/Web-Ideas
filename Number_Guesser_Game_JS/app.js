/* 
Game Funtion
    -Player must guess a number between  a min and max
    -Player gets a certain amount of guesses
    -Notify player of guesses remaining
    -Notify the player of the correct answer if loose
    -Let player choose to play again
*/

//body color


document.body.addEventListener('mousemove' , runevent);

function runevent(e) {
    document.body.style.backgroundColor = `rgb(${e.offsetX} , 200 ,${e.offsetY} )`;
}

//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown' , function(e) {
    if(e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});

//Listen for Guess
guessBtn.addEventListener('click' , function() {
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won 
    if(guess === winningNum) {
        //game over - won
        gameOver(true , `${guess} is correct, YOU WIN!`);
        
    }
    else {
        //wrong number
        guessesLeft -= 1;
        
        if(guessesLeft === 0) {
            //Game over - lost
            gameOver(false, `Game Over , You Lost. The correct number was ${winningNum}`);

        } else {
            //Game continues - answer wrong

            //change border color 
            guessInput.style.borderColor = 'red';

            //empty input
            guessInput.value = '';

            //set message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red' );
        }
        
    }

});

function gameOver(won , msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //Set message
    setMessage(msg, color);


    //play again
    guessBtn.value = 'Play Again';

    //Add class to play again
    guessBtn.className += ' play-again';
}


//Get Random Num
function getRandomNum(min, max) {
    return (Math.floor(Math.random()*(max-min+1)+min));
}

function setMessage(msg , color) {
    message.textContent = msg;
    message.style.color = color;
}
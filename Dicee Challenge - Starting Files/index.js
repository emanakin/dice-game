// Declartions
playerOneDice = document.body.querySelectorAll("img")[0];
playerTwoDice = document.body.querySelectorAll("img")[1];
pageTitle = document.body.querySelector("h1");

//Changes the dice img according to dice roll
function changePlayerOneDice(num){
    if (num === 1){
        playerOneDice.src = "images/dice1.png"
    }
    else if (num === 2){
        playerOneDice.src = "images/dice2.png"
    }
    else if (num === 3){
        playerOneDice.src = "images/dice3.png"
    }
    else if (num === 4){
        playerOneDice.src = "images/dice4.png"
    }
    else if (num === 5){
        playerOneDice.src = "images/dice5.png"
    }
    else if (num === 6){
        playerOneDice.src = "images/dice6.png"
    }
    
}

function changePlayerTwoDice(num){
    if (num === 1){
        playerTwoDice.src = "images/dice1.png"
    }
    else if (num === 2){
        playerTwoDice.src = "images/dice2.png"
    }
    else if (num === 3){
        playerTwoDice.src = "images/dice3.png"
    }
    else if (num === 4){
        playerTwoDice.src = "images/dice4.png"
    }
    else if (num === 5){
        playerTwoDice.src = "images/dice5.png"
    }
    else if (num === 6){
        playerTwoDice.src = "images/dice6.png"
    }
    
}

function decideTheWinner(num, numTwo){
    if (num > numTwo){
        pageTitle.innerHTML = "Player 1, Won!";
    }
    else if (num === numTwo){
        pageTitle.innerHTML = "Draw!";
    }
    else {
        pageTitle.innerHTML = "Player 2, Won!";
    }
}



var playerOneNumber = Math.random();
playerOneNumber = Math.floor(playerOneNumber*6)+1


var playerTwoNumber = Math.random();
playerTwoNumber = Math.floor(playerTwoNumber*6)+1

changePlayerOneDice(playerOneNumber);
changePlayerTwoDice(playerTwoNumber);
decideTheWinner(playerOneNumber, playerTwoNumber);



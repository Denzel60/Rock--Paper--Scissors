let rockEl = document.getElementById("rock");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let compEl = document.getElementById("comp");
let playerEl = document.getElementById("player");
let resultsEl = document.getElementById("results");
var compScoreEl = document.getElementById("compScore");
var playerScoreEl = document.getElementById("playerScore");

let playerScore = 0;
let computerScore = 0;

function updateScore() {
  playerScoreEl.textContent = playerScore;
  compScoreEl.textContent = computerScore;
}

function handleWin() {
  if (resultsEl.textContent == "Player Wins") {
    playerScore++;
  } else if (resultsEl.textContent == "Computer Wins"){
    computerScore++;
  };
  updateScore();
}

rockEl.addEventListener("click", ()=>{
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if(computerChoice === 1){
        compEl.textContent = `✊`;
    } else if (computerChoice === 2){
        compEl.textContent = `✋`;
    } else {
        compEl.textContent = `✌️`;
    }
    playerEl.textContent = `✊`; 

    if(computerChoice === 1 && playerEl.textContent === `✊`){
        resultsEl.textContent = "Draw"
    } else if (computerChoice === 2){
        resultsEl.textContent = "Computer Wins";
    } else {
        resultsEl.textContent = "Player Wins";
    };
    handleWin();
})

paperEl.addEventListener("click", ()=>{
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if(computerChoice === 2){
        compEl.textContent = `✋`;
    } else if (computerChoice === 1){
        compEl.textContent = `✊`;
    } else {
        compEl.textContent = `✌️`;
    }
    playerEl.textContent = `✋`;

    if(computerChoice === 2 && playerEl.textContent === `✋`){
        resultsEl.textContent = "Draw"
    } else if (computerChoice === 1){
        resultsEl.textContent = "Player Wins";
    } else {
        resultsEl.textContent = "Computer Wins";
    };
    handleWin();
})

scissorsEl.addEventListener("click", ()=>{
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if(computerChoice === 3){
        compEl.textContent = `✌️`;
    } else if (computerChoice === 1){
        compEl.textContent = `✊`;
    } else {
        compEl.textContent = `✋`;
    }
    playerEl.textContent = `✌️`;

    if(computerChoice === 3 && playerEl.textContent === `✌️`){
        resultsEl.textContent = "Draw";
    } else if (computerChoice === 1){
        resultsEl.textContent = "Computer Wins";
    } else {
        resultsEl.textContent = "Player Wins";
    };
    handleWin();
});


// let score = 0;
// let computerScore = score++;
// let playerScore = score++;

// if(resultsEl.textContent = "Computer Wins"){
//     compScoreEl.textContent = `${computerScore}`;
// } else if (resultsEl.textContent = "Player Wins"){
//     playerScoreEl.textContent = `${playerScore}`;
// } else if (resultsEl.textContent = "Draw"){
//     compScoreEl.textContent = `${score}`;
//     playerScoreEl.textContent = `${score}`;
// }

let rockEl = document.getElementById("rock");
let paperEl = document.getElementById("paper");
let scissorsEl = document.getElementById("scissors");
let compEl = document.getElementById("comp");
let playerEl = document.getElementById("player");
let resultsEl = document.getElementById("results");
let compScoreEl = document.getElementById("compScore");
let playerScoreEl = document.getElementById("playerScore")

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
        resultsEl.textContent = "Computer wins";
    } else {
        resultsEl.textContent = "Player Wins";
    }
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
        resultsEl.textContent = "Player wins";
    } else {
        resultsEl.textContent = "Computer Wins";
    }
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
        resultsEl.textContent = "Computer wins";
    } else {
        resultsEl.textContent = "Player Wins";
    }
});

if(resultsEl.textContent = "Draw"){

}

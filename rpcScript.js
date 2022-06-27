var rounds = 5;
var playerScore = 0;
var comScore = 0;
document.getElementById('roundNum').innerHTML = rounds;
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('comScore').innerHTML = comScore;

function computerPlay(){
    var max = 3;
    var min = 1;
    var genNum = Math.floor(Math.random() * (max - min +1)) + min;
    switch(genNum){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSOR";

        default:
            return null;
    }   
}

function play(player, computer){
    var out;
    if(player === computer){
        out = "Its a Tie.";
    }
    else if((player === "ROCK" && computer === "SCISSOR") || (player === "SCISSOR" && computer === "PAPER") || (player === "PAPER" && computer === "ROCK")){
        out = "You Win! "+ player+" beats "+computer+ ".";
        playerScore++;
    }
    else{
        out = "You Lose! "+ computer+" beats "+player+ ".";
        
        comScore++;
    }
    rounds--;
    if(rounds === 0){
        out = winStat();
        rounds = 5;
        playerScore = 0;
        comScore = 0;
    }
    document.getElementById('output').innerHTML = out;
    document.getElementById('roundNum').innerHTML = rounds;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('comScore').innerHTML = comScore;
    console.log(player, computer, rounds, playerScore, comScore);
    return;
}

function winStat(){
    if(playerScore > comScore){
        return "Wow you won against the computer";
    }
    else if(playerScore < comScore){
        return "Oops you lost better try again";
    }
    else{
        return "Wow its a draw";
    }
}
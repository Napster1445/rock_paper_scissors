let humanScore = 0;
let computerScore = 0;
let gameFinishedFlag = false

const divGameState = document.querySelector(".game-state");
const pGameScore = document.querySelector("p");
const rock =  document.querySelector('#rock');
const paper =  document.querySelector('#paper');
const scissor =  document.querySelector('#scissor');

console.log(pGameScore);


rock.addEventListener('click', () => {playRound('r', getComputerChoice())})
paper.addEventListener('click', () => {playRound('p', getComputerChoice())})
scissor.addEventListener('click', () => { playRound('s', getComputerChoice())})

function getComputerChoice(){ //A function to get Rock, Paper or Scissors using Random
    rand = (Math.random() * 100) //Generates a Random number between 1 to 99
    if(rand < 33) //If Rand is less than 33, Returns Rock
        return 'r'
    else if (rand < 66) //If Rand is greater than 33 But Less than 66, Returns Paper
        return 'p'
    else //If above statements ain't true, it will return us Scissors
        return 's'
} //33% chance to get either Rock Paper or Scissors

function getHumanChoice(){ //A dialog box appears and expects an answer of 'r', 'p' or 's'. Continues to ask until it gets the proper input
    let breakFlag = true;
    while (breakFlag == true) {
        //let choice = prompt("What will you pick? (r - Rock, p - Paper or s - Scissor)");
        choice = choice.toLowerCase();
        if(choice === 'r' || choice === 'p' || choice === 's'){
            return choice
        }
        else
        {   
            alert("Unsopported Action");
        }
    }
}

function updateH1(string){
    const h1GameState = document.createElement('h1');
    console.log()
    h1GameState.textContent = string;

    divGameState.appendChild(h1GameState)
}

function stateOfWin(){
    return (humanScore == computerScore) ? "ITS A TIE" : (humanScore > computerScore) ? "YOU WONNNN!!!!!" : "You Lose :("
}


function gameFinished(){
    console.log("GAME FINISHED")
    gameFinishedFlag = true
    updateH1(stateOfWin())
}


function updateScore(state, humanChoice, compChoice){
    switch (state) {
        case 1:
            console.log("Its a Tie!!! Both gets points")
            humanScore++
            computerScore++
            break;
        case 2:
            console.log(`You won this round, as ${humanChoice} beats ${compChoice}`)
            humanScore++
            break;
        case 3:
            console.log(`You lost this round, as ${compChoice} beats ${humanChoice}`)
            computerScore++
            break;
        default:
            break;
    }

    pGameScore.textContent = `Game Score: ${humanScore} : ${computerScore}`;
}
function playRound(humanChoice, compChoice){ //Function to check who won? It first check if its a Tie, if true, both gets a point. Then checks if the human player beats the computer, if true, human get a point. If all condition fails, the computer gets a point
    if(computerScore === 5 || humanScore === 5){
        if(!gameFinishedFlag){
            gameFinished()
        }       
    } else {
        console.log(`You Chose '${humanChoice}' and the Computer Chose '${compChoice}'`)

        if(humanChoice == compChoice){
            updateScore(1, humanChoice, compChoice)
        }
        else if ((humanChoice == 'r' && compChoice == 's') || (humanChoice == 's' && compChoice == 'p') || (humanChoice == 'p' && compChoice == 'r')){
            updateScore(2, humanChoice, compChoice)
        }
        else{
            updateScore(3, humanChoice, compChoice)
        }
        console.log(`Current Scores: You: ${humanScore} || Computer: ${computerScore}`)
    }
}
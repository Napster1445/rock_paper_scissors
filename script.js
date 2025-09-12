let humanScore = 0;
let computerScore = 0;

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
        let choice = prompt("What will you pick? (r - Rock, p - Paper or s - Scissor)");
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

function playRound(humanChoice, compChoice){ //Function to check who won? It first check if its a Tie, if true, both gets a point. Then checks if the human player beats the computer, if true, human get a point. If all condition fails, the computer gets a point
    console.log(`You Chose '${humanChoice}' and the Computer Chose '${compChoice}'`)

    if(humanChoice == compChoice){
        console.log("Its a Tie!!! Both gets points")
        humanScore++
        computerScore++
    }
    else if ((humanChoice == 'r' && compChoice == 's') || (humanChoice == 's' && compChoice == 'p') || (humanChoice == 'p' && compChoice == 'r')){
        console.log(`You won this round, as ${humanChoice} beats ${compChoice}`)
        humanScore++
    }
    else{
        console.log(`You lost this round, as ${compChoice} beats ${humanChoice}`)
        computerScore++
    }

    console.log(`Current Scores: You: ${humanScore} || Computer: ${computerScore}`)
}

function playGame(){ //starts the game for 5 rounds (using for loop) and checks the score to know if the human won or the computer won
    alert("LETS PLAY ROCK, PAPER and SCISSORS!!!!!!!")
    for(let i = 0; i < 5; i++)
    {   
        console.log(`ROUND ${i + 1}`)
        playRound(getHumanChoice(), getComputerChoice())
    }

    if(humanScore == computerScore)
        alert(`Its a tie game with ${humanScore} to ${computerScore}`)
    else if (humanScore > computerScore)
        alert(`You won the game with ${humanScore} to ${computerScore}`)
    else
        alert(`Too bad. You lost the game with ${humanScore} to ${computerScore}`)
}

playGame() //starts the game
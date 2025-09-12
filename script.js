function getComputerChoice(){ //A function to get Rock, Paper or Scissors using Random
    rand = (Math.random() * 100) //Generates a Random number between 1 to 99
    console.log(rand)
    if(rand < 33) //If Rand is less than 33, Returns Rock
        return "r"
    else if (rand < 66) //If Rand is greater than 33 But Less than 66, Returns Paper
        return "p"
    else //If above statements ain't true, it will return us Scissors
        return "s"
} //33% chance to get either Rock Paper or Scissors

function getHumanChoice(){
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

console.log(getHumanChoice())
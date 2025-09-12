function getComputerChoice(){ //A function to get Rock, Paper or Scissors using Random
    rand = (Math.random() * 100) //Generates a Random number between 1 to 99

    if(rand < 33) //If Rand is less than 33, Returns Rock
        return "Rock"
    else if (rand < 66) //If Rand is greater than 33 But Less than 66, Returns Paper
        return "Paper"
    else //If above statements ain't true, it will return us Scissors
        return "Scissors"
} //33% chance to get either Rock Paper or Scissors

console.log(getComputerChoice())
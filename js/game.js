function playerInput(){
    
    let playerSelection;

    do
    {
        playerSelection=prompt('Choose "rock","paper" or "scissors":'); 

        if(playerSelection==="rock")return playerSelection;
        else if(playerSelection==="paper")return playerSelection;
        else if(playerSelection==="scissors")return playerSelection;

    
    } while( playerSelection==="" || playerSelection!=="rock" || playerSelection!=="paper" || playerSelection!=="scissors");
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection==="rock")
    {
        if(computerSelection==="rock")
        {console.log("It's a tie");}

        else if(computerSelection==="paper")
        {console.log("You lose!");}

        else
        {console.log("Congrats! You win!");}
    }

}

function computerPlay(){
    let randomNum = Math.floor(Math.random()*(9-1+1))+1;
    let randomAns = (randomNum == 1|| randomNum==5 || randomNum==9)?"rock"
    :(randomNum==2||randomNum==6||randomNum==7)?"paper"
    :"scissors";
    return randomAns;
}

let playerSelection=playerInput();
console.log("You selected: ", playerSelection);
const computerSelection = computerPlay();
console.log("COM selected: ", computerSelection);
console.log(playRound(playerSelection, computerSelection));
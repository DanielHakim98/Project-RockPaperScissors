function game(){
    function playerInput(){  /*Function for receiving input from user and return back to main function*/
    
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
    
    function playRound(playerSelection, computerSelection){ /*Function for checking who wins, you or the processors behind the screeen*/
        if(playerSelection==="rock")
        {   switch(computerSelection){
    
            case "rock":
                console.log("It's a tie");
                break;
            case "paper":
                console.log("You lose! Poor you");
                ++comCounter;
                break;
            default:
                console.log("Congrats! You win!");
                ++playerCounter;
                break;
            }
        }
    
        else if(playerSelection==="paper")
        {   switch(computerSelection){
    
            case "paper":
                console.log("It's a tie");
                break;
            case "scissors":
                console.log("You lose! Poor you");
                ++comCounter;
                break;
            default:
                console.log("Congrats! You win!");
                ++playerCounter;
                break;
            }
        }
    
        else 
        {   switch(computerSelection){
    
            case "scissors":
                console.log("It's a tie");
                break;
            case "rock":
                console.log("You lose! Poor you");
                ++comCounter;
                break;
            default:
                console.log("Congrats! You win!");
                ++playerCounter;
                break;
            }
        }
    }
    
    function computerPlay(){            /*Function for randomizing the selection made by the COM*/
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
    
}

var playerCounter = 0;
var comCounter    = 0;   
    do{
        
        game();
        console.log(`Player: ${playerCounter}, COM: ${comCounter}`);
        if(playerCounter==5)console.log("Ahoi! You're the absolutey winner");
        else if(comCounter==5) console.log("Too bad you lose. Don't worry try again next time");
    

    }while(playerCounter<5 && comCounter<5);
    
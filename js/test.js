let playerCounter = 0;
let comCounter    = 0;   
let btnRock=document.querySelector('.rock');
let btnPaper=document.querySelector('.paper');
let btnScissors=document.querySelector('.scissors');
let btns=document.querySelectorAll('.buttons');
console.log(btnRock);
console.log(btns);




btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        playerSelection=e.target.className;
        game(playerSelection);
        console.log(`Player: ${playerCounter}, COM: ${comCounter}`); 
        if(playerCounter==5){
            alert("Ahoi! You're the absolute winner");
            resetGame();
        }   

        else if(comCounter==5){
            alert("Too bad you lose. Don't worry try again next time");
            resetGame();
        }
               
    });
});


function resetGame(){
    playerCounter=0;
    comCounter=0;
    console.clear();
    console.log("Game has been reset and restart again.")
}   
function game(playerSelection){
    console.log("You selected: ", playerSelection);
    const computerSelection = computerPlay();
    console.log("COM selected: ", computerSelection);
    playRound(playerSelection, computerSelection);
}

function computerPlay(){                                                            /*Function for randomizing the selection made by the COM*/
    let randomNum = Math.floor(Math.random()*(9-1+1))+1;
    let randomAns = (randomNum == 1|| randomNum==5 || randomNum==9)?"rock"
    :(randomNum==2||randomNum==6||randomNum==7)?"paper"
    :"scissors";
    return randomAns;
}

function playRound(playerSelection, computerSelection){                             /*Function for checking who wins the round*/
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
let playerCounter = 0;
let comCounter    = 0;   

let btns=document.querySelectorAll('.buttons');
let playerGUI=document.querySelector('.img1');
let comGUI=document.querySelector('.img2');
let allScore=document.querySelector('.playerCom');
let statement=document.querySelector('.statement');
let resultContainer=document.querySelector('.results');
const btnReset=document.createElement('button');
btnReset.textContent='Reset';

btns.forEach((btn)=>{
    btn.addEventListener('click',startGame);
});


function startGame(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    playerSelection=e.target.id;
    if(playerSelection=="") return;
    game(playerSelection,e.target.src);
    console.log(`Player: ${playerCounter}, COM: ${comCounter}`); 
    whoisWinning(playerCounter,comCounter);      
}

function game(playerSelection,source1){

    console.log("You selected: ", playerSelection);
    const computerSelection = computerPlay();
    console.log("COM selected: ", computerSelection);
    playRound(playerSelection, computerSelection);
    updatePhoto(source1,computerSelection);
}

function updatePhoto(source,comSelection){
    let source2;
    allScore.textContent=`You : ${playerCounter} - ${comCounter} : COM `;

    btns.forEach((btn)=>{
        [...btn.children].forEach((btn)=>{
            if(btn.firstElementChild.id==comSelection) source2=btn.firstElementChild.src;
        });
    });
    
    playerGUI.setAttribute('class','imgResults');
    playerGUI.setAttribute('src',source);
    comGUI.setAttribute('class','imgResults2');
    comGUI.setAttribute('src',source2);
}


function whoisWinning(playerCounter,comCounter){
    if(playerCounter==5){
        allScore.style.color='green'
        allScore.textContent="Ahoi! You're the absolute winner";
        document.querySelector('.magicWords').appendChild(btnReset);
        btns.forEach((btn)=>{
            btn.removeEventListener('click',startGame);
        });
        btnReset.addEventListener('click',resetGame);
    }   

    else if(comCounter==5){
        allScore.style.color='crimson'
        allScore.textContent="Too bad you lose. Don't worry try again next time";
        document.querySelector('.magicWords').appendChild(btnReset);
        btns.forEach((btn)=>{
            btn.removeEventListener('click',startGame);
        });
        btnReset.addEventListener('click',resetGame);
        
    }
    
}

function resetGame(){
    playerCounter=0;
    comCounter=0;
    allScore.textContent=`You : ${playerCounter} - ${comCounter} : COM `;
    playerGUI.setAttribute('src',"");
    comGUI.setAttribute('src',"");
    playerGUI.setAttribute('class','img1');
    comGUI.setAttribute('class','img2');
    allScore.style.color='#050A30';
    btns.forEach((btn)=>{
        btn.addEventListener('click',startGame);
    });
    console.clear();
    statement.textContent="Get Ready!"
    console.log("Game has been reset and restart again.")
  
}   

function computerPlay(){                                                            /*Function for randomizing the selection made by the COM*/
    let randomNum = Math.floor(Math.random()*(3-1+1))+1;
    let randomAns = randomNum == 1?"rock"
    :randomNum==2?"paper"
    :"scissors";
    return randomAns;
}

function playRound(playerSelection, computerSelection){                             /*Function for checking who wins the round*/
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
        statement.textContent="It's a tie";
      }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        console.log("Congrats! You win!");
        statement.textContent="Congrats! You win!";
        ++playerCounter;
      }
    else if(
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ){
        console.log("You lose! Poor you");
        statement.textContent="You lose! Poor you!";
        ++comCounter;
      }
}    
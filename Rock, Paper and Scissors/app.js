let userScore = 0;
let skynetScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorepara = document.querySelector('#user-score');
const resetB = document.querySelector('#button1');

const skynetScorepara = document.querySelector('#skynet-score');


const genSkynetChoice = () => {
    // randomly generate rock paper or scissors
    const options = ['rock', 'paper', 'scissors'];
    let randomidx = Math.floor(Math.random()*3); // to get random value from 0 to 2
    
    return options[randomidx];
}

const resetGame = () => {
    if(userScore ===0 && skynetScore ===0 ){
        msg.innerHTML = 'Start Playing';
    }else{
        console.log("reset button is clicked")
        userScore = 0;
        skynetScore= 0;
        userScorepara.innerText = 0;
        skynetScorepara.innerText = 0;
        msg.innerText = "Game reset.Let's start again"
        msg.style.backgroundColor = '#6D326D';
        msg.style.color = "#FFFFFF";

    }
    
}

const drawGame = () =>{
    console.log('Game was draw');
    msg.innerText = "It's a draw. Let's go again?";
    msg.style.backgroundColor = '#96ACB7';
    msg.style.color = '#48233C';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) { //true
        userScore++; 
        userScorepara.innerText = userScore;
        
        console.log('You have won John Connor');

        msg.innerText = (`You have won John Connor. Your ${userChoice} defeated ${compChoice}`);

        msg.style.backgroundColor = 'Green';

    } else {      //false
        skynetScore++;
        skynetScorepara.innerText = skynetScore;

        console.log('Defeat. womp womp!');

        msg.innerText = (`Defeat. womp womp! ${compChoice} defeated your ${userChoice}`);

        msg.style.backgroundColor = '#880808';
        msg.style.color = '#e2e9d9';

    }

    
}

const playGame = (userChoice) => {
    console.log("user's choice: ", userChoice);
    const compChoice =  genSkynetChoice();
    console.log("skynet choice: ", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = compChoice === 'paper'? false : true;
        }else if (userChoice === 'paper'){
            userWin = compChoice === 'rock'? true : false;
        
        }else {
            userWin = compChoice === 'rock'? false : true;

        
        };

        showWinner(userWin, userChoice, compChoice);
    };


};

choices.forEach((choice)=>{
    choice.addEventListener('click',() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);

        playGame(userChoice);

    });
});

resetB.addEventListener('click', resetGame);






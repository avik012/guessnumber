let secretNumber=Math.trunc(Math.random()*20)+1;
console.log('secretNumber hello',secretNumber);
let score=20;
let highScore=0;

//document.querySelector('body').style.backgroundColor="blue";
const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
let guess=Number(document.querySelector('.guess').value);         //textContent

if(!guess){
    displayMessage('No number');
}
else if(guess==secretNumber){
    document.querySelector('.message').textContent="✔Correct Number";
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').textContent=secretNumber;

    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
}
else if(guess!==secretNumber){
    if(score>1){
        const resultmessage=guess>secretNumber ? "Tooo Big": "Too Small";
        displayMessage(resultmessage);
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        displayMessage('Lost the Game');
        document.querySelector('body').style.backgroundColor='red';
    }
}

});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start guessing......';
     secretNumber=Math.trunc(Math.random()*20)+1;
})
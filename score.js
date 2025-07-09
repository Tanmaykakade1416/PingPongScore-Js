/*
const p1btn=document.querySelector('#p1button');
const p2btn=document.querySelector('#p2button');
const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');
const reset=document.querySelector('#reset');
const result=document.querySelector('#result');
const winningScoreSelect=document.querySelector('#playto');

let p1score=0;
let p2score=0;
let winningScore=3;
let isGameOver=false;

p1btn.addEventListener('click',function(){
    if(!isGameOver){
        p1score+=1;
        if(p1score === winningScore){
            isGameOver=true;
            result.textContent="Congratulations!! Player 1 Won the Match";
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent=p1score;
    }
})
p2btn.addEventListener('click',function(){
    if(!isGameOver){
        p2score+=1;
        if(p2score === winningScore){
            isGameOver=true;
            result.textContent="Congratulations!! Player 2 Won the Match";
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent=p2score;
    }
})

// Rest button
reset.addEventListener('click',resets);

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    resets();
});

function resets(){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    result.textContent="Use the buttons below to keep Score"
    p1Display.textContent=0;
    p2Display.textContent=0;
}
*/


// Updations
const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}


/// Thing to add: ager match 5 ki ho aur 4-4 score ho to match 6 ki ho jai jaise actual game me hota hai.
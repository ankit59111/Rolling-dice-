var scores ,roundScore,activePlayer,dice,gamePlaying,previousScore=0,range;
init();
var range=prompt("enter the range");
//document.querySelector('#current-' +activePlayer).textContent=dice;

document.querySelector('.dice').style.display = 'none' ;

document.querySelector('.btn-roll').addEventListener('click',function () {
    console.log(previousScore);
    console.log(dice);

    if (gamePlaying){
        previousScore=dice;
        dice =Math.floor((Math.random()*6)+1);
        document.querySelector('.dice').src='dice-' + dice +'.png';
        document.querySelector('.dice').style.display = 'block';
        if(previousScore==6&&dice==6){
            document.querySelector('#score-' +activePlayer).textContent=0;
            resetScore();
        }else if (dice !== 1){
            roundScore +=dice;
            document.querySelector('#current-' +activePlayer).textContent=roundScore;
        }else{
            resetScore();
        }
    }
});

function resetScore() {
    document.getElementById('current-' +activePlayer).textContent=0;
    (activePlayer === 0) ? activePlayer=1 : activePlayer=0;
    roundScore = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none' ;
}

document.querySelector('.btn-hold').addEventListener('click',function () {
    if(gamePlaying){
        scores[activePlayer] +=roundScore;
        document.querySelector('#score-' +activePlayer).textContent=scores[activePlayer];
        if (scores[activePlayer]>=range){
            document.querySelector('#name-' +activePlayer).textContent='WINNER !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;
        }else {
            resetScore();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click',init);
function init() {
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlaying=true;
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('#score-0').textContent=scores[0];
    document.querySelector('#score-1').textContent=scores[1];
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}












let score = JSON.parse(localStorage.getItem('score'));
if (score === null)
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    };

neww();

function playergame(playermove) {
    const compu = pickcompu();
    let result = ' ';
    if (playermove === 'scissors') {
        if (compu === 'rock') {
            result = 'you lose';
        }
        else if (compu === 'paper') {
            result = ' you win';

        }
        else if (compu === 'scissors') {
            result = 'tie';
        }

    } else if (playermove === 'paper') {
        if (compu === 'rock') {
            result = 'you win';
        }
        else if (compu === 'paper') {
            result = 'tie';

        }
        else if (compu === 'scissors') {
            result = 'you lose';
        }
    } else if (playermove === 'rock') {

        if (compu === 'rock') {
            result = 'tie';
        }
        else if (compu === 'paper') {
            result = 'you lose';

        }
        else if (compu === 'scissors') {
            result = 'you win';
        }
    }
    document.querySelector('.cbd')
        .innerHTML = ` you chose:<img src="${playermove}-emoji.png" class="iconn move-button"><img src="${compu}-emoji.png"
            class="iconn move-button">: chose computer`;
    document.querySelector('.olf').innerHTML = result;


    if (result === 'you win') {
        score.wins += 1;

    } else if (result === 'you lose') {
        score.loses += 1;

    } else if (result === 'tie') {
        score.ties += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    neww();

    //alert(`you picked ${playermove} , computer picked ${compu}. ${result}
    //Wins:${score.wins},Loses:${score.loses},Ties:${score.ties}`);
}

function neww() {
    document.querySelector('.abc')
        .innerHTML = `Wins:${score.wins},Loses:${score.loses},Ties:${score.ties}`;

}
function pickcompu() {
    let compu = ' ';
    const randomNumber = Math.random();

    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber < 1 / 3) {

        compu = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < .66) {

        compu = 'paper';
    }
    else {

        compu = 'scissors';
    }
    console.log(compu);
    return compu;

}
const colors = ['red', 'blue', 'green', 'yellow'];
let sequence = [], userSequence = [], round = 0, speed = 1000;
const squares = document.querySelectorAll('.square');
const startButton = document.getElementById('startButton');
const roundDisplay = document.getElementById('round');
const resetButton = document.querySelector('.center');
let playerName = '';

startButton.onclick = () => getPlayerName();
resetButton.onclick = () => startGame();

function getPlayerName() {
    playerName = prompt('Ingrese su nombre:');
    if (playerName) {
        startGame();
    }
}

function startGame() {
    sequence = [];
    round = 0;
    speed = 1000;
    nextRound();
}

function nextRound() {
    userSequence = [];
    sequence.push(colors[Math.floor(Math.random() * 4)]);
    round++;
    roundDisplay.textContent = `Round ${round}`;
    speed = Math.max(500, 1000 - round * 50);
    showSequence();
}

function showSequence() {
    let i = 0;
    const interval = setInterval(() => {
        highlightSquare(sequence[i]);
        i++;
        if (i >= sequence.length) clearInterval(interval);
    }, speed);
}

function highlightSquare(color) {
    const square = document.querySelector(`.${color}`);
    square.style.opacity = '0.5';
    setTimeout(() => square.style.opacity = '1', speed / 2);
}

squares.forEach(square => {
    square.onclick = (e) => {
        const clickedSquare = e.target;
        clickedSquare.style.opacity = '0.5';
        setTimeout(() => clickedSquare.style.opacity = '1', 300);
        
        userSequence.push(clickedSquare.classList[1]);
        checkSequence();
    };
});

function checkSequence() {
    if (userSequence.join('') === sequence.join('')) {
        setTimeout(nextRound, 1000);
    } else if (!sequence.join('').startsWith(userSequence.join(''))) {
        roundDisplay.textContent = 'Game Over!';
        saveScore();
    }
}

function saveScore() {
    let scores = JSON.parse(localStorage.getItem('simonScores')) || [];
    scores.push({ name: playerName, score: round });
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('simonScores', JSON.stringify(scores));
}

function displayScores() {
    let scores = JSON.parse(localStorage.getItem('simonScores')) || [];
    let scoreBoard = 'Top Scores:\n' + scores.map(s => `${s.name}: ${s.score}`).join('\n');
    alert(scoreBoard);
}

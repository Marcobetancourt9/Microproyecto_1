let puntajes = JSON.parse(localStorage.getItem('simonScores')) || [];
        
if (localStorage.getItem('simonScores')) {
    puntajes = localStorage.getItem('simonScores') ? eval(localStorage.getItem('simonScores')) : [];
}

function saveScore() {
    if (!playerName) return;
    puntajes.push({ name: playerName, score: round });
    puntajes.sort((a, b) => b.score - a.score);
    localStorage.setItem('simonScores', JSON.stringify(puntajes));
    updateScoreTable();
}

function updateScoreTable() {
    let tableBody = document.getElementById('scoreTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    puntajes.forEach((p, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td><td>${p.name}</td><td>${p.score}</td>`;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', updateScoreTable);
document.addEventListener('DOMContentLoaded', () => {
    updateScoreTable();
});

function updateScoreTable() {
    let puntajes = JSON.parse(localStorage.getItem('simonScores')) || [];
    let tableBody = document.getElementById('scoreTableBody');

    if (!tableBody) return;

    tableBody.innerHTML = '';

    puntajes.forEach((p, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>${p.score}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function resetRanking() {
    localStorage.removeItem('simonScores');
    updateScoreTable();
}

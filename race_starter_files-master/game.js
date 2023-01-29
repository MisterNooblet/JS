const p1grid = document.querySelectorAll('#player1-race td');
const p2grid = document.querySelectorAll('#player2-race td');
const winner = document.querySelector('#Winner');
const restartBtn = document.querySelector('#restartBtn')

let p1Pos = 0;
let p2Pos = 0;

window.addEventListener('keyup', (e) => {
    let key = e.key
    if (p1Pos == 11 || p2Pos == 11) {
        return
    }
    if (key === 'd') {
        p1grid[p1Pos].classList.remove('active')
        p1grid[p1Pos + 1].classList.add('active')
        p1Pos += 1;
    } else if (key === 'ArrowRight') {
        p2grid[p2Pos].classList.remove('active')
        p2grid[p2Pos + 1].classList.add('active')
        p2Pos += 1;
    }
    declareWinner()
})

function declareWinner() {
    if (p1Pos === 11) {
        winner.innerHTML = 'Player 1 Wins'
        restartBtn.classList.remove('hidden')
    } else if (p2Pos === 11) {
        winner.innerHTML = 'Player 2 Wins'
        restartBtn.classList.remove('hidden')
    }
}

restartBtn.addEventListener('click', () => {
    p1grid.forEach(element => {
        element.classList.remove('active')
    });
    p2grid.forEach(element => {
        element.classList.remove('active')
    });
    p1grid[0].classList.add('active')
    p2grid[0].classList.add('active')
    p1Pos = 0
    p2Pos = 0
    restartBtn.classList.add('hidden')
    winner.innerHTML = ''
})
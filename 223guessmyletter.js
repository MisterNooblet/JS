const questionMark = document.querySelector('#questionMark');
const gameStatus = document.querySelector('#gameStatus');
const playAgain = document.querySelector('#playAgain');
const yesBtn = document.querySelector('#yesBtn');
const keysGuessed = document.querySelector('#keysGuessed');

let letterBank
let attempts
let letterToGuess
let won

window.addEventListener('keydown', function (e) {
    guess(e);
})

function guess(e) {
    let key = e.key.toLowerCase()
    if (won) {
        return
    }
    if (letterBank.indexOf(key) != -1 && key === letterToGuess) {
        gameStatus.innerHTML = 'You have guessed the letter!'
        gameStatus.classList.add('green')
        gameStatus.classList.remove('red')
        questionMark.innerHTML = key
        playAgain.classList.toggle('hidden')
        yesBtn.classList.toggle('hidden')
        won = true;
    } else if (letterBank.indexOf(key) != -1) {
        attempts.push(key)
        gameStatus.classList.remove('green')
        gameStatus.classList.add('red')
        gameStatus.innerHTML = 'Wrong letter try again!'
        keysGuessed.innerHTML = attempts.sort()
        letterBank[letterBank.indexOf(key)] = ''
        console.log(letterBank);
    } else if (!/[a-z]/.test(key)) {
        gameStatus.classList.remove('green')
        gameStatus.classList.add('red')
        gameStatus.innerHTML = 'Invalid input only letters a-z are allowed!'
    } else if (attempts.indexOf(key) !== -1) {
        gameStatus.classList.remove('green')
        gameStatus.classList.add('red')
        gameStatus.innerHTML = 'Letter already guessed!'
    }
}

yesBtn.addEventListener('click', startGame)

function startGame() {
    letterBank = "abcdefghijklmnopqrstuvwxyz".split('')
    attempts = []
    letterToGuess = letterBank[Math.floor(Math.random() * letterBank.length) + 1]
    won = false;
    yesBtn.classList.add('hidden')
    playAgain.classList.add('hidden')
    gameStatus.classList.remove('green')
    gameStatus.innerHTML = 'Start guessing'
    gameStatus.innerHTML = 'Start guessing'
    questionMark.innerHTML = '❔'
    keysGuessed.innerHTML = ''
}

startGame()
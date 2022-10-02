const state = document.getElementById('state')
const score = document.getElementById('score')
const vs = document.getElementById('vs')
let scorePoints = 0

function gameLogic(userChoice) {
    const robot = Math.floor(Math.random() * 3)
    const emojis = ['Rock', 'Paper', 'Scissors' ]

    if (userChoice == emojis[robot]) {
        state.innerText = 'Tie'
        score.innerText = scorePoints
        vs.innerText = `${userChoice} vs  ${emojis[robot]}`
    } else if (userChoice == emojis[0] && emojis[robot] == 'Paper') {
        state.innerText = 'Lose'
        scorePoints--
        score.innerText = scorePoints
        vs.innerText = `${userChoice} vs  ${emojis[robot]}`
    } else if (userChoice == emojis[1] && emojis[robot] == 'Scissors') {
        state.innerText = 'Lose'
        scorePoints--
        score.innerText = scorePoints
        vs.innerText = `${userChoice} vs  ${emojis[robot]}`
    } else if (userChoice == emojis[2] && emojis[robot] == 'Rock') {
        state.innerText = 'Lose'
        scorePoints--
        score.innerText = scorePoints
        vs.innerText = `${userChoice} vs  ${emojis[robot]}`
    } else {
        state.innerText = 'Win'
        scorePoints++
        score.innerText = scorePoints
        vs.innerText = `${userChoice} vs  ${emojis[robot]}`
    }

    
}
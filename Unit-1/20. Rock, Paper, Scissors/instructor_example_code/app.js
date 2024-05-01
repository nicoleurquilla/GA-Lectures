/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */
function $(cssSelector) {
    return document.querySelector(cssSelector)
}


/* All HTML elements we need to manipulate (in the order they appear in index.html)
--------------------------------------------------------------------- */
const modal = $('#modal')
const closeModal = $('#close-modal')
const wins = $('#wins')
const ties = $('#ties')
const losses = $('#losses')
const choiceScreen = $('#choices')
const rockBtn = $('#rock')
const paperBtn = $('#paper')
const scissorsBtn = $('#scissors')
const resultScreen = $('#results')
const playerChoiceEl = $('#player-choice img')
const resMsg = $('#result-message')
const restart = $('#restart')
const cpuChoiceEl = $('#cpu-choice img')
const openModal = $('#open-modal')


/* Create event listeners for opening and closing the modal
--------------------------------------------------------------------- */
// Opening the modal
openModal.addEventListener('click', () => modal.style.display = 'flex')
// Closing the modal
closeModal.addEventListener('click', () => modal.style.display = 'none')


/* This object will store a tally of each result the player gets
--------------------------------------------------------------------- */
const stats = {
    wins: 0,
    ties: 0,
    losses: 0
}


/* Build the gameplay logic, which will be executed when the user clicks on a fighter
--------------------------------------------------------------------- */
function play(event) {
    // Step 1. Determine which fighter was clicked on by using the event object
    const playerChoice = event.target.id

    // Step 2. The computer will select a fighter using a random index between 0 and 2
    const cpuChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]

    // Step 3. Determine if the player won, lost, or tied
    let outcome

    if (playerChoice === cpuChoice) {
        stats.ties++
        outcome = 'TIE GAME'
    } else if (
        (playerChoice === 'rock' && cpuChoice === 'scissors') ||
        (playerChoice === 'paper' && cpuChoice === 'rock') ||
        (playerChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        stats.wins++
        outcome = 'YOU WON!'
    } else {
        stats.losses++
        outcome = 'YOU LOST 😓'
    }

    // Step 4.1: Hide the Selection Screen
    choiceScreen.style.display = 'none'

    // Step 4.2: Modify the Result Screen
    if (playerChoice === 'rock') {
        playerChoiceEl.src = 'https://i.imgur.com/volQsQG.png'
    } else if (playerChoice === 'paper') {
        playerChoiceEl.src = 'https://i.imgur.com/kD6m2W9.png'
    } else {
        playerChoiceEl.src = 'https://i.imgur.com/om0NMTC.png'
    }

    resMsg.children[0].innerText = outcome

    if (cpuChoice === 'rock') {
        cpuChoiceEl.src = 'https://i.imgur.com/volQsQG.png'
    } else if (cpuChoice === 'paper') {
        cpuChoiceEl.src = 'https://i.imgur.com/kD6m2W9.png'
    } else {
        cpuChoiceEl.src = 'https://i.imgur.com/om0NMTC.png'
    }

    // Step 4.3: Display the Result Screen
    resultScreen.style.display = 'flex'


    // Step 5: Modify the scoreboard to reflect the win/loss/tied game totals
    wins.children[1].innerText = stats.wins
    ties.children[1].innerText = stats.ties
    losses.children[1].innerText = stats.losses
}

rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)


/* Allow the user to play agin by clicking on the "Play Again" button
--------------------------------------------------------------------- */
restart.addEventListener('click', () => {
    resultScreen.style.display = 'none'
    choiceScreen.style.display = 'flex'
})
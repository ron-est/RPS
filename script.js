let ties = 0
let wins = 0
let losses = 0

let userChoice1 = prompt('r, p, s')
let computerChoices = ['r', 'p', 's']
let computerChoice1 = computerChoices[Math.floor(Math.random() * computerChoices.length)]


if (userChoice1 === computerChoice1) {
    alert('you tied')
    ties++
} else if ((userChoice1 === 'r' && computerChoice1 === 's') || (userChoice1 === 's' && computerChoice1 === 'p') || (userChoice1 === 'p' && computerChoice1 === 'r')) {
    alert('you win')
    wins++
} else {
    alert('you lose')
    losses++
}

let userChoice2 = prompt('r, p, s')
let computerChoice2 = computerChoices[Math.floor(Math.random() * computerChoices.length)]

if (userChoice2 === computerChoice2) {
    alert('you tied')
    ties++
} else if ((userChoice2 === 'r' && computerChoice2 === 's') || (userChoice2 === 's' && computerChoice2 === 'p') || (userChoice2 === 'p' && computerChoice2 === 'r')) {
    alert('you win')
    wins++
} else {
    alert('you lose')
    losses++
}

let userChoice3 = prompt('r, p, s')
let computerChoice3 = computerChoices[Math.floor(Math.random() * computerChoices.length)]

if (userChoice3 === computerChoice3) {
    alert('you tied')
    ties++
} else if ((userChoice3 === 'r' && computerChoice3 === 's') || (userChoice3 === 's' && computerChoice3 === 'p') || (userChoice3 === 'p' && computerChoice3 === 'r')) {
    alert('you win')
    wins++
} else {
    alert('you lose')
    losses++
}

alert(`Wins: ${wins} Losses: ${losses} Ties ${ties}`)
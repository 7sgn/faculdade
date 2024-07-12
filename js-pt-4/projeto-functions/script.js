const result = document.querySelector('.result')
const resultChoice = document.querySelector('.resultChoice')
const humanPoint = document.querySelector('#cont1')
const machinePoint = document.querySelector('#cont2')

let humanPointCont = 0
let machinePointCont = 0

/*
    humanPointCont  -> Camel case
    GAME_OPTIONS -> Snake case  // no caso de ENUMS se usa o Snake case


*/

const GAME_OPTIONS = {
    ROCK: 'Pedra',
    PAPER: 'Papel',
    SCISSORS: 'Tesoura'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]


}


const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Deu empate'
        resultChoice.innerHTML = `Você escolheu: ${human} e a Alexa escolheu: ${machine}`

    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS') ||
        (human ===GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {

        result.innerHTML = 'Você ganhou, parabéns!'
        resultChoice.innerHTML = `Você escolheu: ${human} e a Alexa escolheu: ${machine}`
        humanPointCont++
        humanPoint.innerHTML = humanPointCont

    } else {
        result.innerHTML = 'Você perdeu para a Alexa!'
        resultChoice.innerHTML = `Você escolheu: ${human} e a Alexa escolheu: ${machine}`
        machinePointCont++
        machinePoint.innerHTML = machinePointCont
    }
}


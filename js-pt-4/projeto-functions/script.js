const result = document.querySelector('.result')
const resultChoice = document.querySelector('.resultChoice')
const humanPoint = document.querySelector('#cont1')
const machinePoint = document.querySelector('#cont2')

let humanPointCont = 0
let machinePointCont = 0

const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}


const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = 'Deu empate'
        resultChoice.innerHTML = `Você escolheu: ${human} e a Alexa escolheu: ${machine}`
        
    } else if ((human === 'Papel' && machine === 'Pedra') ||
        (human === 'Pedra' && machine === 'Tesoura') ||
        (human === 'Tesoura' && machine === 'Papel')) {

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
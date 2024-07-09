const result = document.querySelector('.result')
<<<<<<< HEAD
const resultChoice = document.querySelector('.resultChoice')
const humanPoint = document.querySelector('#cont1')
const machinePoint = document.querySelector('#cont2')

let humanPointCont = 0
let machinePointCont = 0

const playHuman = (humanChoice) => {
    
=======
const bothChoice = document.querySelector('.choices')
const myChoice = document.querySelector('#cont1')
const machineChoice = document.querySelector('#cont2')

let myChoiceNumber = 0
let machineChoiceNumber = 0

const playHuman = (humanChoice) => {
>>>>>>> 643f12b189557b450ca60d86e23fce964577ede8
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
<<<<<<< HEAD

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

=======
}   

const playTheGame = (human, machine) => {
    
    
     if(human === machine) {
        result.innerHTML = 'Deu empate!'
        bothChoice.innerHTML = `Você escolheu: ${human} e a alexa escolheu: ${machine}`
    }else if (human === 'Papel' && machine === 'Pedra' || human === 'Pedra' && machine === 'Tesoura' || human === 'Tesoura' && machine === 'Papel') {
        result.innerHTML = 'Você ganhou!'
        bothChoice.innerHTML = `Você escolheu: ${human} e a alexa escolheu: ${machine}`
        myChoiceNumber++
        myChoice.innerHTML = myChoiceNumber

    } else {
        result.innerHTML = 'Você perdeu para a Alexa!'
        bothChoice.innerHTML = `Você escolheu: ${human} e a alexa escolheu: ${machine}`
        machineChoiceNumber++
        machineChoice.innerHTML = machineChoiceNumber
    }
    
>>>>>>> 643f12b189557b450ca60d86e23fce964577ede8
}
const result = document.querySelector('.result')
const bothChoice = document.querySelector('.choices')
const myChoice = document.querySelector('#cont1')
const machineChoice = document.querySelector('#cont2')

let myChoiceNumber = 0
let machineChoiceNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
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
    
}
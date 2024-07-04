/*
    Functions / Funções

    Trecho de código que é executado
    SOMENTE quando solicitado (Parente gente boa)

    funcções podem receber argumentos ou parâmetros

*/

// Exemplo:

// const variavel = 'abacate'

// console.log(variavel)

// function nomeNaTela() {
//     console.log('Marlon')
// }

// nomeNaTela()

// Exemplo:

// function sayMyName(name) {
//     console.log(`O nome é: ${name}`)
// }

// sayMyName('Marlon')
// sayMyName('Patrícia')

// Exemplo:


function sum(value = 0, value2 = 1) {
    console.log( value + value2)
}

function sub(value = 0, value2 = 1) {
    console.log(value - value2)
}

fucntion div(value = 0, value2 = 1) {
    console.log(value / value2)
}

function exp(value =0, value2 = 1) {
    console.log( value ** value2)
}
o

sum(23, 45)     // soma
sub(23, 43)     // subtração
div(45, 56)     // divisão
exp(45, 3)      // Exponencial
/*
    Functions / Funções

    function padrão -> function() {}

    arrow function -> () => {}

        Não escrevemos 'Function',
        Além disso, usamos o sinal '=>' para criá-l,
        o que lembra uma flecha, fazendo jus ao nome 'Arrow Functions'.

*/

function sayMyName(name) {
    return `Seu nome é ${name}`
}


const sayMyName2 = (name) => `Seu nome é ${name}`   // Se houver apenas 1 parâmetro não é necessario o uso de parenteses ()

const sum = (number1, number2) => number1 + number2


console.log(sum(4, 5))
console.log(sayMyName('Marlon'))
console.log(sayMyName2('Marlon'))
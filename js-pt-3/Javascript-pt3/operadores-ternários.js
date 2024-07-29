/*
    Operadores ternários

    ? if (se)
    : else (se não)

 O ternário é usado quando o retorno é muito pequeno

 */

const salary = 3000

if(salary < 3000) {
    console.log('O colaborador é Junior')
} else if(salary >= 3000 && salary < 10000) {
    console.log('Ele é Senior')
} else {
    console.log('Ele é diretor')
}
    



// IF/ELSE ->    salary < 3000 ? console.log('O colaborador é Junior') : console.log('Ele é Senior') - 

// IF -> salary < 3000 && console.log('O colaborador é Junior') - Para usar sem o else

// ELSE IF

salary < 3000 ? console.log('O colaborador é Junior') : salary >= 3000 && salary < 10000 ? console.log('Ele é Senior') : console.log('Ele é diretor')







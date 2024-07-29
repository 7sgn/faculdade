/*
    O Reduce aceita até 4 parâmetros:

    const novoArray = arrayOriginal.reduce(
    (acumulador, valorAtual, índice, arrayOriginal) => {
        return xxxxx}, valorInicial) :

        1) O acumulador, na primeira iteração terá o valor inicial que daremos a ele.
        Item OBRIGATÓRIO.
        2) O valor do atual elemento sendo iterado. Item OBRIGATÓRIO.
        3) O índice do elemento atual. Item OPCIONAL
        4) O array original. Item OPCIONAL.


*/

//const numbers = [1, 2, 3, 4, 5]
// const total = number.reduce((acumulador, atual) => {
//  return acumulador = acumulador + numero

// }, 0) // repare nesse 0. Ele é o valor inicial que o acumulador receberá


/*
O que aconteceu aqui? Definimos um valor inicial para o acumulador. Então ele
começõu a somar número a número dentro do array.

Na primeira iteração foi assim:
 
  acumulador = acumulador(0) + atual(1) -> Agora acumulador valerá 1

Na segunda iteração, agora acumulador vale 1.

  acumulador = acumulador(1) + atual(2) - Agora acumulador valerá 3
*/

// total é igual a 15:
// numbers continua [1, 2, 3, 4]:

/*
    REDUCE
    - Retorna um valor (pode ser novo array, um objeto, string, number, etc.)
    - Aceita 4 parâmetros
        - acumulador
        - valor atual
        - index
        - array completo
    */
/*

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acc, currentValue) => {
    console.log(acc + 'Acumulador')
    console.log(currentValue + 'Valor Atual')
    return acc + currentValue
}, 0)

*/


/*

const companies = [
    {
        name: 'Samsung',
        marketValue: 50,
        CEO: 'Kim Hyun Suk',
        foundedOn: 1938
    },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Satya Nadella',
        foundedOn: 1975
    },
    {
        name: 'Intel',
        marketValue: 117,
        CEO: 'Brian Krzanich',
        foundedOn: 1968
    },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckerberg',
        foundedOn: 2004
    },
    {
        name: 'Spotfy',
        marketValue: 30,
        CEO: 'Daniel Ek',
        foundedOn: 2006
    },
    {
        name: 'Apple',
        marketValue: 845,
        CEO: 'Tim Cook',
        foundedOn: 1976
    }
]

const totalValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(totalValue)

*/

const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 }
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerKg * value.kg
    return acc + result
}, 0)

console.log(`A sua compra ficou no total de: ${finalValue}`)
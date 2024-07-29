    /*
    const novaArray = arrayOriginal.filter((valorAtual, índice, arrayOriginal) => {
            seu código aqui
        });

        1) O filter vai passar por todos os itens do array, e o primeiro parâmetro é 
        cada item, um por vez do array que estamos filtrando. Item OBRIGATÓRIO.
        2) O índice é a posição atual que estamos filtrando. Item OPCIONAL.
        3) Uma cópia do array original. Item OPCIONAL.
    
        A cada item, fazemos uma 'pergunta' ao código. Se a resposta for verdadeira
        nauqele item, ele guardará o valorAtual no novo array, Caso seja falso, o valor
        será descartado
        
        */

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const pares = numeros.filter(valorAtual => valorAtual % 2 === 0)

// pares ficou assim... [2, 4, 6, 8, 10]
// numbers continua... [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    /*

    FILTER

    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo

        return true -> Item atual passa pro novo array
        return false -> Item atual NÃO passa pro novo array
    */


    /*

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter((number) => {
    return true ? number < 100 || number % 2 === 0 : false
})

console.log(newList)

    */

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

const newCompanies = companies.filter(company => {
    return true ? company.marketValue < 200 && company.foundedOn > 1990 : false
})

console.log(newCompanies)

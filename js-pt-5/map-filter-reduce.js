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

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente compnhias fundados abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

/*

const add10percent = company => {
    company.marketValue += (company.marketValue / 10)
    
    return company
}

const filterCompanies =  company =>  company.foundedOn < 1990


const totalMarketValue =  (acc, company) =>  acc + company.marketValue


const marketValueoldcompanies = companies
    .map(add10percent)
    .filter(filterCompanies)
    .reduce(totalMarketValue, 0)

console.log(marketValueoldcompanies)

*/



const sub10percent = company => {
    company.marketValue -= (company.marketValue / 10)
    
    return company
}

const filterCompanies =  company =>  company.foundedOn > 1990


const totalMarketValue =  (acc, company) =>  acc + company.marketValue


const marketValueoldcompanies = companies
    .map(sub10percent)
    .filter(filterCompanies)
    .reduce(totalMarketValue, 0)

console.log(marketValueoldcompanies)


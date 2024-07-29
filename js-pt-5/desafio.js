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

const newCompaniesEx = companies.map((value) => {
    const newValue = value.marketValue + (value.marketValue * 10 / 100)
    const acsValue =  [
        {name: value.name,
         marketValue: newValue,
         CEO: value.CEO,
         foundedOn: value.foundedOn    
        }
    ]
    return acsValue
})

const oldCompanies = newCompaniesEx.filter((company) => {
    return true ? company.foundedOn < 1990 : false
})


const newValueMarket = oldCompanies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)

console.log(newValueMarket)
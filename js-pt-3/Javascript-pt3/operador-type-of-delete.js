/*
    Operadores type of e delete

    typeof -> Tipo do dado
    delete -> 

*/

const myObject = {
    name: 'Marlon',
    age: 28,
    addres: 'Brasília-df'
}

const myNumber = '30'

delete myObject.addres

console.log(typeof myNumber)
console.log(myObject)

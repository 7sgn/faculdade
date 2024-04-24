/*  Tipos de dados

    1. String --> Textos*
    2. Numbers --> Números
    3. Boolean -->
    4. Object --> Objetos

    
*/

const name = 'Marlin'
const age = 28
const address = 'Guará 2 QE 40'

const Marlon = {
    name: 'Marlon',
    age: 28,
    addreess: {
        street: 'QE 40',
        number: 6,
        city: 'DF',
        country: 'Brasil'
    }
}
Marlon.addreess.number = 1

console.log(Marlon.addreess.number)


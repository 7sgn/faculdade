/*
    Estrutura de repetição 

    FOR IN

*/

const users = {
    name: 'Marln',
    age: 28,
    street: 'Rua dos bobos'
}

// console.log(usera.name)
// console.log(users['name'])



for (const key in users) {
    console.log(key + users[key])

}


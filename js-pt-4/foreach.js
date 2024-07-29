/*

    ForEach(item, index, array)


*/

const users = [
    { name: 'Marlon', number: '(18) 9434-3434' },
    { name: 'João', number: '(19) 9434-3434' },
    { name: 'Maria', number: '(61) 9434-3434' },
    { name: 'Patricia', number: '(78) 9434-3434' }
]

users.forEach(item => {    // mesmo que a function(){}
    console.log(`${index + 1} Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});
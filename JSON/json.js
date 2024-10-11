/*  JSON - Javascript Object Notation

    - Padrão de troca e armazenamento de informações
    - Padrão lógico simples
    - Leve para ser enviado e recebido
    - Simples e fácil de aprender
    - Derivado do javascript
    - Utiliza o formato chave / valor
*/


 const user = {"nome": "Marlon",
    "idade": 29,
    "filhos": null,
    "Hobbies": ["Codar", "andar de skate", "fazer musica"]}

const userJson = JSON.stringify(user)
const userJsonToJs = JSON.parse(userJson)

console.log(user)
console.log(userJson)
console.log(userJsonToJs)

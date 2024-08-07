/*
Métodos de Array's
Arrays são um tipo de dado no JavaScript. Nada mais é que, uma forma de guardar várias informações em um lugar só. Guardar vários elementos em uma mesma variável.
Os arrays são muito poderosos e ainda contam com diversas ferramentas para auxiliar na forma como lidamos com os dados dentro dos arrays.
push: Adiciona um item no array. O item adicionado sempre será colocado na última posição do array.
let array = [1, 2, 4, 5, 10]
array.push(22)

console.log(array)
// [1, 2, 4, 5, 10, 22]

let array2 = ["abacate", "salada-mista", "mamão"]
array.push("banana")

console.log(array2)
// ["abacate", "salada-mista", "mamão", "banana"]

​
length: Mostra o tamanho do array. A quantidade de itens dentro do array.
let array = [1, 2, 4]
console.log(array.length)
// 3

let array2 = ["abacate", "salada-mista", "mamão", 33, 44]
console.log(array2.length)
// 5

​
sort: Organiza o array
let array = ["mamão", "abacate", "laranja"]
array.sort()
// ["abacate", "laranja", "mamão"]

​
delete: Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
let array = ["mamão", "abacate", "laranja"]
delete array[1]
// ["abacate", undefined, "mamão"]

console.log(array.length)
// 3

​
every:  Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. Se algum item não estiver de acordo, ele retornará false.
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 200 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(users.every((user) => user.credit < 1000))
//true

console.log(users.every(user => user.credit < 500))
//false

​
some: faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. O .some() retorna true se pelo menos um elemento do Array passar no teste.
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every( (value) => value < 20 ));
//true

const users = [
	{name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
];

console.log(usersList.every((user) => user.credit < 100))
//false

console.log(usersList.every(user => user.credit < 500))
//true
​
fill: Preenche posições do array como desejarmos
/*
	fill(1, 2, 3) 
	1) O que vai ser colocado no array
	2) A posição inicial 
	3) Posição final
*/

/*
// Preenche com 0 da posição 2 do array até a posição 4
console.log(array1.fill(0, 2, 4));
// [1, 2, 0, 0]

// Preenche com 5 a partir da posição 1 
console.log(array1.fill(5, 1));
// [1, 5, 5, 5]

console.log(array1.fill(6));
// [6, 6, 6, 6]
​
find: Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = users.find((user) => user.name === 'Maria');
// 	{name: 'Maria', credit: 900}

const findUser = users.find((user) => user.credit === 300);
// 	{name: 'Carlos', credit: 300}

​
findIndex: Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findUser = users.findIndex((user) => user.name === 'Maria');
// 1

const findUser = users.findIndex((user) => user.credit === 300);
// 2

​
concat - Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// ['a', 'b', 'c', 'd', 'e', 'f']

​
includes - Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// true

console.log(pets.includes('at'));
// false
​
join - O método join() junta todos os elementos de um array.
//join(separator)

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// "Fire,Air,Water"

console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join(' '));
// "Fire Air Water"

console.log(elements.join('-'));
// "Fire-Air-Water"
​
slice - O método slice() retorna um novo array, apenas com as informações escolhidas
/* 1) Posição do array da qual vamos começar a pegar as informações 
		  para criar o novo array
	 2) Posição final do array que vamos pegar os dados
*/
/*
const users = ["João", "Maria", "Pedro", "Michele", "Fernando"];

console.log(users.slice(2));
// ["Pedro", "Michele", "Fernando"];

console.log(users.slice(2, 4));
// [ "Pedro", "Michele" ];

console.log(users.slice(1, 6));
// ["Maria", "Pedro", "Michele", "Fernando"];


console.log(users.slice());
// ["João", "Maria", "Pedro", "Michele", "Fernando"];
​
splice - Esse metódo remove ou adiciona elementos em um array em uma posição específica.
/* 1) Posição do array da qual vamos começar a tirar as informações 
	 2) Quantos elementos eu quero retirar a partir da posição inicial 
	 3) Item que você quer adicionar
*/
/*
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];

months.splice(1, 0, 'Feb');
// [ 'Jan', 'Feb', 'Fev', 'Mar', 'Abr', 'Mai' ];


months.splice(1, 4, 'May');
// [ 'Jan', 'May' ]


​
pop - Remove o último elemento de um array.
const array1 = [1, 2, 3];

const lastElement = array1.pop();

console.log(array1);
// [1, 2]

console.log(lastElement);
// 3
​
shift - Remove o primeiro elemento de um array.
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// [2, 3]

console.log(firstElement);
// 1



*/


 const myArray = [1, 2, 3]

 myArray.push(4) // adiciona o item na última posição do array

 console.log(myArray)


const myArray2 = [1, 2, 3]

console.log(myArray2.length) // Mostra a quantidade de itens que existe no array


const myArray3 = ['limão', 'abacate','caqui']

myArray3.sort()             // Organiza em ordem alfabética os itens do array

console.log(myArray3)


const myArray4 = ['limão', 'abacate','caqui']

delete myArray4[0]          // Deleta o item do array, mas a posição continua a mesma

console.log(myArray4)


const users = [
	{ name: 'Nico', credit: 600},
	{ name: 'Maria', credit: 900},
	{ name: 'Maria', credit: 300},
	{ name: 'Vanessa', credit: 200}
]

const isTrue = users.every( user => user.credit > 100) 


console.log(isTrue) // retorna True se todos ositens do array passarem na condição, caso contrario retorna False


const isSome = users.some( user => user.credit > 300) // retorna True se pelo menos 1 item do array passar  condição

console.log(isSome)

const numbers = [1, 2, 3, 4]

numbers.fill('abacate', 0, 2) // fill substitui pelo item que for colocado no método fill
						// na primeira posição é o item que você QUER SUBSTITUIR, na segunda posição a partir de onde começa e na terceira onde você quer que termine
console.log(numbers)


const users1 = [
	{ name: 'Nico', credit: 600},
	{ name: 'Maria', credit: 900},
	{ name: 'João', credit: 300},
	{ name: 'Vanessa', credit: 200}
]

const findAUser = users1.find( user => user.name === 'Maria') // verifica se o item está no array caso contrário retorna undefined

console.log(findAUser)

const findAUser1 = users1.findIndex( user => user.name === 'Vanessa') 

console.log(findAUser1) // retona em qual posição o item está

users1[findAUser1].name = 'Maria Joaquina'

console.log(users1)


const array0 = ['a', 'b', 'c']
const array01 = ['d', 'e', 'f']
const numbers1 = [1, 3, 5]
const numbers2 = [2, 4, 6]

const array03 = array0.concat(array01)
console.log(array03)


const elements = ['Fire', 'Air', 'Water']

const elements1 = elements.join(' ')

console.log(elements1)

const elements3 = ['Fire', 'Air', 'Water']

elements.pop() // Elimina o último item do array

console.log(elements3)


const elements4 = ['Fire', 'Air', 'Water']

elements4.shift() // elimina o primeiro item do array

console.log(elements4)

const peopleNames = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando']

const newPeople = peopleNames.slice(1, 3) // fatia e retorna somente os items selecionados do array
										
console.log(newPeople)



const peopleNames1 = ['João', 'Maria', 'Pedro', 'Michele', 'Fernando']

peopleNames1.splice(0, 3, 'Patrícia') // substitui o item do array original, confome selecionado

console.log(peopleNames1)

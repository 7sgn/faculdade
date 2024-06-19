/*
 document --> HTML
 getElementById --> trás um elemento pelo ID
 getElementeByClassName  --> Trás TODOS os elementos com essa classe
 getElementeByTagName  -->  Trás TODOS os elementos com essa TAG
 getElementByName --> Trás TODOS os elementos com esse NAME

 querySelector  -->  Trás UM elemento, o PRIMEIRO que encontrar
 querySelectorAll  -->  Trás TODOS os elemtnos que encontrar

*/ 
/*
const input = document.getElementById("main-input")
const elements = document.getElementsByClassName("paragraph-js")
const tags = document.getElementsByTagName("p")
const Name = document.getElementsByName('nome-completo')
*/
/*
const elements1 = document.querySelectorAll("p")

/*
console.log(input)
console.log(elements)
console.log(tags)
console.log(Name)
*/

//console.log(elements1) // Trás apenas um elemento e o primeiro que encontrar, nesse caso o .paragraph-js é uma classe do html, se for um id troca por #
// Usa-se o button como referência ao elemento button do html e o main button chama a classe daquele elemento.


/*
    Alterando e acessando textos

    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHTML -> permite adicionar HTML e modificar o texto

*/

// const element = document.querySelector('.paragraph-js')

// element.textContent = 'O novo texto é esse'

// element.innerHTML = 'Texto novo <b>Olá</b>'

// console.log(element.textContent) // SÓ HTML
// console.log(element.innerText) // LEVA EM CONTA O CSS

// console.log(element.innerHTML) // TRÁS TUDO --> Permite adicionar HTML

// const button = document.querySelector('.main-button')

// button.style.backgroundColor = '#852394'
/*
const input = document.querySelector('#main-input')



function cliqueiNoBotao(){
    console.log(input.value)
}

function digiteiNoInput(){
    console.log('Digitei no input')
}
*/

const input = document.querySelector('#main-input')
const select = document.querySelector('select')
const button = document.querySelector('.main-button')

function troqueiValor(event){
    console.log(event)
}

// select.addEventListener("change", troqueiValor)
input.addEventListener("onkeypress", troqueiValor)
const list = document.querySelector('ul')
const buttonFor = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll(productArray){
    productArray.forEach( product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
    `
        
})
    list.innerHTML = myLi
}

function mapAllItens(){
    const newPrices = menuOptions.map( product => ({
        ...product,
        price: product.price * 0.9,
    }))
    
    showAll(newPrices)
}

buttonFor.addEventListener('click', showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)

const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const currencySelectToConvert = document.querySelector('.currency-select-to-convert')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')
    
    const bitcoinToday = 346.478
    const libraToday = 6.9
    const dolarToday = 5.2
    const euroToday = 6.2

  
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
    
    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == 'bitcoin'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('caf-FR', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }    
}

function changeCurrency(){
    const changeImage = document.querySelector('.currency-img')
    const changeName = document.querySelector('#currency-name')

    if(currencySelect.value == 'real'){
        changeImage.src = './assets/real.png'
        changeName.innerHTML = 'Real Brasileiro'
    }
    if(currencySelect.value == 'dolar'){
        changeImage.src = './assets/dolar.png'
        changeName.innerHTML = 'Dólar Americano'
    }
    if(currencySelect.value == 'euro'){
        changeImage.src = './assets/euro.png'
        changeName.innerHTML = 'Euro'
    }
    if(currencySelect.value == 'libra'){
        changeImage.src = './assets/libra.png'
        changeName.innerHTML = 'Libra'
    }
    if(currencySelect.value == 'bitcoin'){
        changeImage.src = './assets/bitcoin.png'
        changeName.innerHTML = 'Bitcoin'
    }
}
function currencySelectToconvertImg(){
    const changeImageToConvert = document.querySelector('.currency-img-to-convert')
    const changeNameToConvert = document.querySelector('#currency-name-to-convert')

    if(currencySelectToConvert.value == 'real'){
        changeImageToConvert.src = './assets/real.png'
        changeNameToConvert.innerHTML = 'Real Brasileiro'
    }
    if(currencySelectToConvert.value == 'dolar'){
        changeImageToConvert.src = './assets/dolar.png'
        changeNameToConvert.innerHTML = 'Dólar Americano'
    }
    if(currencySelectToConvert.value == 'euro'){
        changeImageToConvert.src = './assets/euro.png'
        changeNameToConvert.innerHTML = 'Euro'
    }
    if(currencySelectToConvert.value == 'libra'){
        changeImageToConvert.src = './assets/libra.png'
        changeNameToConvert.innerHTML = 'Libra'
    }
    if(currencySelectToConvert.value == 'bitcoin'){
        changeImageToConvert.src = './assets/bitcoin.png'
        changeNameToConvert.innerHTML = 'Bitcoin'
    }
}

currencySelectToConvert.addEventListener('change', currencySelectToconvertImg)
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
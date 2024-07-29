/*
    IF (se)
    Else (se não)
    Else if

*/

const temperature = 36

if(temperature === 36){
    console.log('VocÊ está saudável')
} else if(temperature > 36 && temperture <= 40){
    console.log('Está com febre')
} else if(temperature > 40){
    console.log('Está com muita febre')
} else {
    console.log('Está com hipotermia')
}
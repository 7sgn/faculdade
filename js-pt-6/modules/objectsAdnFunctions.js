function mult(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

const persom = {
    name: 'Marlon',
    age: 29,
    talk: () => {
        console.log(this.name)
    }
}

// this.person = persom

persom.talk()
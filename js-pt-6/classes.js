class Person {
  constructor(name, age){
    this.name = name
    this.age = age

  }  
    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years"`)
    }
}

const newPerson = new Person('Marlon', 29)

newPerson.talk()


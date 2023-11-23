// Classe
class Class {
    attribute01
    attribute02

    // Todas as novas instancias da Classe necessitarão dos seguintes parâmetros para serem criadas.
    constructor(attribute01, attribute02) {
        this.attribute01 = attribute01
        this.attribute02 = attribute02
    }

    
    functionAction() {
        console.log("Text ${this.attribute01} text ${this.attribute02}")
    }
}

// Instancias da Classe
    // Metodo 01
    const classInstance01 = new Class()
        classInstance01.attribute01 = "Text01"
        classInstance01.attribute02 = 01

    console.log(classInstance01)


    // Metodo 02
    const classInstance02 = new Class("Text02", 02)

    console.log(classInstance02)


// EXAMPLES

class Person {
    name
    age
    birthday

    constructor(name, age) {
        this.name = name
        this.age = age
        this.birthday = 2023 - age
    }

    DescribePerson() {
        console.log("The person name is ${this.name}, ${this.age} years old, was born in ${this.birthday}")
    }
}

const Fabio = new Person("Fabio", 150)

console.log(Fabio)



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

    classInstance01.functionAction()


    // Metodo 02
    const classInstance02 = new Class("Text02", 02)

    classInstance02.functionAction()



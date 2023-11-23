class Class {
    attribute01
    attribute02

    functionAction() {
        console.log("Text ${this.attribute1} text ${this.attribute2}")
    }
}

const classInstance01 = new Class()
classInstance01.attribute01 = "Text01"
classInstance01.attribute02 = 01

const classInstance02 = new Class()
classInstance02.attribute01 = "Text02"
classInstance02.attribute02 = 02

classInstance01.functionAction()
classInstance02.functionAction()


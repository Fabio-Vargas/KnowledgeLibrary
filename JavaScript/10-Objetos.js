// Criando um Objeto (Lembrar de colocar " , " após cada propriedade criada.
let object = {
    propriedade1: "valor",
    propriedade2: valor,
  
    propriedade3: function action () {
        console.log("Text ${this.propriedade1} text ${this.propriedade2}")
    }
}

// Utilizando o Objeto criado
console.log(object.propriedade1 + object.propriedade2)

object.propriedade1 = "Teste" // Acesso direto
object.["propriedade2"] = "Teste" // Acesso dinâmico

object.propriedade3()

// Mudando a função criada na propriedade3 do object
object.propriedade3 = function () {
    console.log("Text ${this.propriedade1}")
}
  

// EXEMPLOS
let convidado = {
    nome: "Fulano",
    idade: 20,
    presente: "Quebra-Cabeça",
    localizacao: "Sala de Estar"
}

console.log(convidado.nome + " tem " + convidado.idade + " anos e trouxe um " + convidado.presente + " de presente!")
console.log(convidado.nome + " está na " + convidado.localizacao + ".")

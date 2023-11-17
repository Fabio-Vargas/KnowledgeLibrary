// Chamando a Função
acao(parametro)

// Estrutura da Função
function acao(parametro) {
  console.log("Função executada com o Parâmetro: " + parametro)
}

//Alterando o Parâmetro da Função
acao("Opção1") // Resultado: "Função executada com o Parâmetro: Opção1"
acao("Opção2") // Resultado: "Função executada com o Parâmetro: Opção2"



// EXEMPLOS
torrar()

function torrar() {
  console.log("Torrando Pão")
  inserirPao()
}

function inserirPao() {
  console.log("Preparando para inserir o Pão")
    console.log("Finalizado")
}

// -----
function calcularIdade(nome, anoNascimento) {
  let idade = 2023 - anoNascimento;
  console.log(nome + " tem " + idade + " anos!")
}

calcularIdade("Nome1", 1990) // Resultado: "Nome1 tem 33 anos!)
calcularIdade("Nome2", 2000) // Resultado: "Nome2 tem 23 anos!)

// -----
let username = getFirstName("Anakin-Skywalker", "-")
console.log("Seja bem vindo " + username)

username = getFirstName("Darth Vader", " ")
console.log("Seja bem vindo " + username)

function getFirstName(name, splitChar) {
  let firstName = name.split(splitChar)[0]
    return firstName
}

// -----
function sum(num1, num2) {
  return num1 + num2
}

let resultado = sum(10, 5) // Resultado: 10 + 5 = 15
console.log("A soma é igual a: " + resultado) // Resultado: "A soma é igual a: 15"

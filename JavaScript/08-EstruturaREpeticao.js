// FOR
const numeros = [1, 2, 3, 4, 5]
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}

for (let contador = 1; contador <= 5; contador++) {
  console.log(contador)
}


// WHILE
let jogadas = 0
let cara = false
while (!cara) {
  jogadas++
  cara = Math.random() < 0.5
}
console.log("A moeda caiu cara após ${jogadas} jogadas!")

let dado = 0
while (dado <= 4) {
  dado = Math.floor(Math.random() * 6) + 1
  console.log(Você tirou um", dado)
}


// DO WHILE
let numero
do {
  numero = prompt("Digite um número entre 1 e 10:")
} while (numero < 1 || numero > 10)
console.log("Você digitou o numero ${numero}.")

let bolinhosConsumidos = 0
do {
  bolinhosConsumidos++
  console.log("Você consumiu", bolinhosConsumidos, "bolinhos!")
} while (bolinhosConsumidos < 5)

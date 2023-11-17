// ## Operadores Lógicos
//    **( Operador ) Descrição | Exemplo**

//      ( && ) AND (logic) | if (condition1 && condition2)
let idade = 18
let vistoVerificado = false
let resultado1 = (idade >= 18) && (vistoVerificado === true)
console.log(resultado1)

let moedasColetadas = 99
let item1 = "Estrela"
let resultado2 = (moedasColetadas >= 100) && (item1 === "Estrela")
console.log(resultado2)

//      ( || ) OR (logic) | if (condition1 || condition2)
let tempo1 = "Chuva"
let item2 = "Guarda Chuva"
let podeSair = (tempo1 !== "Chuva") || (item2 === "Guarda Chuva")
console.log("O personagem pode sair de casa? " + podeSair)

//      ( ! ) NOT (logic) | if (!condition)
let tempo2 = "Chuva"
let resultado3 = tempo2 === "Chuva"
console.log(!!resultado3)

let tempo3 = "Chuva"
let horario = 0800
let resultado4 = !((tempo3 !== "Chuva") && (horario > 0600))
console.log(reusltado4)

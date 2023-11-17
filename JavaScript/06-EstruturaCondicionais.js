

if (caminhoEsquerda === "Obstaculo") {
  seguirCaminhoDireita()
} else if (caminhoEsquerda === "Ponte Quebrada") {
    procurarOutroCaminho
  } else {
      seguirCaminhoEsquerda()
    }


let possuiOvos = true
let itensComprados = ""

if (possuiOvos) {
  itensComprados = "Leite"
} else {
    console.log("Passou na sessão de congelados")
    itensComprados = "Lasanha Congelada"
  }
console.log("Item comprado: " + itensComprados)


let fomeNivel = "1"

if (fomeNivel === 1) {
  console.log("Sem Fome")
} else if (fomeNivel === 2) {
    console.log("Pouca Fome")
  } else {
    console.log("Muita Fome")
    }

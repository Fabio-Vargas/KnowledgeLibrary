// ## Operadores de Comparação (Relacionais)
//    **( Operador ) Descrição**

//      ( == ) Equal To | Value: let isEqual = (x == y) | Value and Format: let isEqual = (x === y)
let marca1 = "Apple"
let resultado = marca === "Samsung"
console.log(resultado)

//      ( != ) Not Equal To | let isNotEqual = (x != y)
let marca = "Apple"
console.log(marca !== "Samsung")

//      ( > ) Greater Than | let isGreater = (x > y)
let CPF_Bloqueado1 = "111.222.333-00"
let CPF_Usuario1 = "222.333.444-00"
let CPF_Autorizado1 = CPF_Usuario1 !== CPF_Bloqueado1
console.log("Usuario autorizado? " + CPF_Autorizado1)

//      ( < ) Less Than | let isLess = (x < y)
let CPF_Permitido2 = "111.222.333-00"
let CPF_Usuario2 = "111.222.333-00"
let CPF_Autorizado2 = CPF_Usuario2 !== CPF_Permitido2
console.log("Usuario autorizado? " + CPF_Autorizado2)

//      ( >= ) Greater Than or Equal To | let isGreaterOrEqual = (x >= y)
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitida = idadeUsuario >= idadeMinima
console.log("Usuario maior de idade? ") + idadePermitida)

//      ( <= ) Less Than or Equal To | let isLessOrEqual = (x <= y)
let idadeDeCorte = 60
let idadeUsuario = 50
let resultadoTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log("Usuario idoso? " + resultadoTerceiraIdade)


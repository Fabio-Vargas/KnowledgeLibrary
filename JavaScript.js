// # Operadores e Expressões
// ## Operadores Aritméticos
//    **( Operador ) Descrição**

//      ( + ) Adição de Números | let adicaoNumeros = num1 + num2;
let adicaoNum1 = 5
let adicaoNum2 = 3
let adicaoCalculo = adicaoNum1 + adicaoNum2
console.log("Resultado do cálculo da Adição: " + adicaoCalculo)

//      ( + ) Adição de Strings | let adicaoString = "string1" + "string2";
let string1 = "A"
let string2 = "B"
console.log("Valor da variável: " + string1 + string2)

//      ( - ) Subtração | let subtracao = num1 - num2
let subtracaoNum1 = 5
let subtracaoNum2 = 3
let subtracaoCalculo = subtracaoNum1 - subtracaoNum2
console.log("Resultado do cálculo da Subtração: " + subtracaoCalculo)

//      ( * ) Multiplicação | let multiplicacao = num1 * num2
let multiplicador = 5
let multiplicando = 3
let produto = multiplicador * multiplicando
console.log("Resultado do cálculo da Multiplição: " + produto)

//      ( / ) Divisão | let divisao = 5 / 3
let divisor = 50
let dividendo = 2
let divisao = divisor / dividendo
console.log("Resultado do cálculo da Divisão: " + divisao)

//      ( % ) Módulo (Resto da Divisão) | let modulo = 5 % 3
let modulo = 5 % 3
console.log("O resto da Divisão é: " + modulo)



// ## Operadores de Incremento e Decremento
//    **( Operador ) Descrição**

//      ( ++ ) Incremento | let contador = 0; contador++;
let contadorIncremento = 1
contador++
contador++
console.log("Resultado Contador Incremeto" + contadorIncremento)

//      ( ++ ) Decremento | let contador = 0; contador--;
let contadorDecremento = 1
contador--
contador--
contador--
contador--
console.log("Resultado Contador Decremeto" + contadorDecremento)



// ## Operadores de Atribuição
//    **( Operador ) Descrição**

//      ( = ) Atribuição | let x = num;
let preco = 10;

//      ( += ) Adição e Atribuição | let num = 10; num += 2;
preco += 2 // preco = preco + 2
console.log("Resultado Adição e Atribuição: " + preco)

//      ( -= ) Subtração e Atribuição | let num = 10; num -= 3;
preco -= 3 // preco = preco - 3
console.log("Resultado Subtração e Atribuição: " + preco)

//      ( *= ) Multiplicação e Atribuição | let num = 10; num *= 4;
preco *= 4 // preco = preco * 4
console.log("Resultado Multiplicação e Atribuição: " + preco)

//      ( /= ) Divisão e Atribuição | let num = 10; num /= 5;
preco /= 5 // preco = preco / 5
console.log("Resultado Divisão e Atribuição: " + preco)

//      ( %= ) Módulo e Atribuição | let num = 10; num %= 6;
preco %= 6 // preco = preco % 6
console.log("Resultado Módulo e Atribuição: " + preco)



// ## Operadores de Comparação (Relacionais)
//    **( Operador ) Descrição**

//      ( == ) Equal to
let isEqual = (x == y) // Value
let isEqual2 = (x === y) // Value and Format

//      ( != ) Not Equal to
let isNotEqual = (x != y)

//      ( > ) Greater Than
let isGreater = (x > y)

//      ( < ) Less Than
let isLess = (x < y)

//      ( >= ) Greater Than or Equal to
let isGreaterOrEqual = (x >= y)

//      ( <= ) Less Than or Equal to
let isLessOrEqual = (x <= y)



// ## Operadores Lógicos
//    **( Operador ) Descrição**

//      ( && ) AND (logic)
if (condition1 && condition2) {code}

//      ( || ) OR (logic)
if (condition1 || condition2) {code}

//      ( ! ) NOT (logic)
if (!condition) {code}

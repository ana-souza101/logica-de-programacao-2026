/* Desenvolva uma calculadora que solicite dois números e a operação desejada (+, -, *, / ou
    %). Utilize switch-case e trate o caso de divisão por zero. */
    

import leia from 'readline-sync';

var num1 = leia.questionFloat(" Digite um numero: ")
var num2 = leia.questionFloat(" Digite outro numero: ")

console.log("============== CALCULADORA ==================")
console.log("                1- Soma                      ")
console.log("                2- Subtração                 ")
console.log("                3- Multiplicação             ")
console.log("                4- Divisão                   ")
console.log("=============================================")
 
var opcoes = leia.questionInt(" Digite a opcao desejada: ")

switch(opcoes){
    case 1:
        var soma = num1 + num2
        console.log(" O Resultado é: " + soma)
        break;
    case 2:
        var subtra = num1 - num2
        console.log(" O Resultado é: " + subtra)
        break;
    case 3:
        var mult = num1 * num2
        console.log(" O Resultado é: " + mult)
        break;
    case 4: 
        var div = num1 / num2
        console.log(" O Resultado é: " + div)
}
// receber o valor de 5 valores de 5 corridas de aplicativo e tirar 25% do valor do aplicatido e depopis mostrar o valor real

import leia from 'readline-sync';


var corr1 = leia.questionFloat("insira o valor da primeira corrida: ");
var corr2 = leia.questionFloat("insira o valor da segunda corrida: ");
var corr3 = leia.questionFloat("insira o valor da terceira corrida: ");
var corr4 = leia.questionFloat("insira o valor da quarta corrida: ");
var corr4 = leia.questionFloat("insira o valor na quinta corrida: ");

var soma = (corr1 + corr2 + corr3 + corr4 + corr5);
var percentApli = soma * (25/100); 
var valorReal = soma - porcentApli;
 
console.log(" O dinheiro queo motorista recebeu foi R$" + valorReal.toFixed(2));
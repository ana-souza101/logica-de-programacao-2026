//Cálculo de desconto em produto. Faça um algoritmo que leia o valor de um produto e calcule um desconto de 10%. Mostre o valor do desconto e o valor final do produto.

import leia from 'readline-sync';

var prod = leia.questionFloat(" Digite o valo do produto: R$")

var desconto = prod * (10/100);
var valorFinal = prod - desconto;

console.log(" O valo do desconto é de: R$" + desconto);
console.log(" E o valor final do produto é de: R$" + valorFinal);
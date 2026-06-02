//  Cálculo do salário com aumento. Escreva um algoritmo que leia o salário de um funcionário e calcule um aumento de 15%. Mostre o novo salário.

import leia from 'readline-sync';

var salario = leia.questionFloat(" Digite o valo do seu salario: R$");
var aumento = salario * (15/100);
var novoSalario = salario + aumento;

console.log(" Seu novo salario tem o valor de: R$" + novoSalario);


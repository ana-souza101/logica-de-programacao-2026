// Cálculo do consumo médio de combustível. Faça um algoritmo que leia a distância percorrida em quilômetros e a quantidade de litros de combustível gastos. 
// Depois, calcule o consumo médio em km/l

import leia from 'readline-sync';

var quilo = leia.questionFloat(" Digite a distancia de quilometros percorridos: ");
var litro = leia.questionFloat(" Digite a quantidade de litros de combustivel gasto: ");

var calculo = quilo / litro;

console.log(" O consumo médio de km/l é: " + calculo.toFixed(2));
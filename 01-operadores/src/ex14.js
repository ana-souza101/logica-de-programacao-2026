//Conversão de horas para minutos e segundos. Escreva um algoritmo que leia uma quantidade de horas e converta esse valor para minutos e segundos.

import leia from 'readline-sync';

var hora = leia.questionFloat(" Digite a quantidade de horas: ")

var minuto = hora * 60;
var segundo = hora * 3600;

console.log(" o valor da hora em minutos é: " + minuto);
console.log(" o valor da hora em segundos é: " + segundo);


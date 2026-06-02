// coverter metros para centímetros e milímetros

import leia from 'readline-sync';

var metros = leia.questionFloat(" Digite o número de metros: ");

var centimetros = (metros * 100);
var milimetros = (metros * 1000);

console.log(" Os metros em centimetros é: " + centimetros.toFixed(2))
console.log(" Os metros em milimetros é: " + milimetros.toFixed(2))
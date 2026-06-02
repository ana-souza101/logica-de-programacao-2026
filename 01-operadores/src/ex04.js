// Ler eleitores do municipio, número de votos brancos, nulos e válidos e depois calcular o percentual que cada um representa em relaçao ao total de eleitores

import leia, { question, questionInt } from "readline-sync";

var totalElei = leia.questionInt(" Digite o numero total de eleitores: ");
var totalVotBran = leia.questionInt(" Digite a quantidade de votos brancos: ");
var totalVotNul= leia.questionInt(" Digite a quantidade de votos nulos: ");
var totalVotVal = leia.questionInt(" Digite a quantidade de votos validos: ");

var percentBran = (totalVotBran / totalElei) * 100;
var percentNul = (totalVotNul/ totalElei) * 100;
var percentVal = (totalVotVal/ totalElei) * 100;

console.log(" ")
console.log(" Percentual de votos brancos: " + percentBran.toFixed(2)) 
console.log(" Percentual de votos nulos: " + percentNul.toFixed(2)) 
console.log(" Percentual de votos válidos: " + percentVal.toFixed(2)) 


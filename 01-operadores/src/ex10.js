// calculo de média

import leia from 'readline-sync';

var nota1 = leia.questionFloat(" Digite a primeira nota: ");
var nota2 = leia.questionFloat(" Digite a segunda nota: ");
var nota3 = leia.questionFloat(" Digite a terceira nota: ");

var media = (nota1 + nota2 + nota3) /3;

var res = media >= 7 ? "Aprovado!" : "Reprovado"; // ? "se sim..."  : "se não..."

console.log(" A média é: " + media.toFixed(2) + ", " + res);
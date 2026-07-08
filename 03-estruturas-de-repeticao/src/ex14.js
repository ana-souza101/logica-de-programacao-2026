import leia from 'readline-sync';

var num = leia.questionInt("Digite um numero: ");
var fatorial = 1;

for (var i = num; i >= 1; i--) {
    fatorial = fatorial * i;
}

console.log("O fatorial de", num, "é", fatorial);
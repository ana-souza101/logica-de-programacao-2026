import leia from 'readline-sync';

var Valentina = 1.50;
var Joaozinho = 1.40;
var anos = 0;

while (Joaozinho <= Valentina) {

    Valentina = Valentina + 0.02;
    Joaozinho = Joaozinho + 0.03;
    anos++;

}

console.log("Joaozinho sera mais alto que Valentina em", anos, "anos.");
console.log("Altura da Valentina:", Valentina.toFixed(2), "m");
console.log("Altura do Joaozinho:", Joaozinho.toFixed(2), "m");
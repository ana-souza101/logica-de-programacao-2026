import leia from 'readline-sync';

var vetor1 = [];
var vetor2 = [];
var vetor3 = [];
var resultado = [];

export function exercicio8() {
    for (var i = 0; i < 9; i++) {
        vetor1[i] = Math.floor(Math.random() * 100) + 1;
        vetor2[i] = Math.floor(Math.random() * 100) + 1;
        vetor3[i] = Math.floor(Math.random() * 100) + 1;
    }

    for (var i = 0; i < 3; i++) {
        resultado[i] = vetor1[i];
    }

    for (var i = 3; i < 6; i++) {
        resultado[i] = vetor2[i];
    }

    for (var i = 6; i < 9; i++) {
        resultado[i] = vetor3[i];
    }

    console.log("Vetor 1:", vetor1);
    console.log("Vetor 2:", vetor2);
    console.log("Vetor 3:", vetor3);
    console.log("Resultado:", resultado);
}

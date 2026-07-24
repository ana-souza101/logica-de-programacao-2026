import leia from 'readline-sync';

var vetor = [];
var encontrou = false;

export function exercicio9() {
    for (var i = 0; i < 10; i++) {
        vetor[i] = Math.floor(Math.random() * 10) + 1;
    }

    console.log("Vetor:", vetor);

    for (var i = 0; i < 10; i++) {

        for (var j = i + 1; j < 10; j++) {

            if (vetor[i] == vetor[j]) {
                console.log("Valor duplicado: " + vetor[i]);
                encontrou = true;
            }

        }

    }

    if (!encontrou) {
        console.log("Não existem valores duplicados.");
    }
}

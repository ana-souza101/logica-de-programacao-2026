import leia from 'readline-sync';

/* Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
elementos, de tal modo que o primeiro elemento venha a ser o último depois da
inversão. */

export function exercicio5() {
    console.log("========= EXERCICIO 5 =========")

    var vetorInvert = [];
    var vetor = [];
    var j = 0;
    
    for (var i = 0; i < 10; i++) {
        var num = leia.questionInt("Digite um número: ");
        vetor[i] = num;
    }
    
    for (var i = 9; i >= 0; i--) {
        vetorInvert[j] = vetor[i];
        j++;
    }
    
    console.log(vetor);
    console.log(vetorInvert);

}

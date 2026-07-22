import leia from 'readline-sync';

/* Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
Por fim exiba os dois vetores. */

export function exercicio1(){
console.log("========= EXERCICIO 1 =========")

var vetor = [];
var vetorMult = [];

for(var i = 0; i < 10; i++){
    var num = leia.questionInt(" DIgite um número: ")

    vetor[i] = num;
    vetorMult[i] = num * 5

}

console.log("\nPrimeiro vetor: " + vetor)
console.log("\nSegundo vetor: " + vetorMult + "\n")

}


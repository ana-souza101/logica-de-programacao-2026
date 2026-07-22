import leia from 'readline-sync';

/* Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
somatório desses números na tela. Após exibir a soma, o programa deve mostrar
também os números que o usuário digitou, um por linha. */

export function exercicio2(){
console.log("========= EXERCICIO 2 =========")

var num = [];
var soma = 0;

for(var i = 0; i < 5; i++){
    num[i] = leia.questionInt(" DIgite um número: ")
    soma += num[i];
}

console.log("\nSoma:" + soma + "\n");

for (var i = 0; i < num.length; i++) {  
    console.log(num[i])
}


}
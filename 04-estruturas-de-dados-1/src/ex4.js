import leia from 'readline-sync';

/* Crie um algoritmo para ler 15 números inteiros e mostrar no final, os que forem maiores
ou igual a 10. */

export function exercicio4(){
    console.log("========= EXERCICIO 4 =========")
    
    var num = [];
    for (var i = 0; i < 15; i++) {
        num[i] = leia.questionInt("Informe o número: ")

    }
    for (var i = 0; i < num.length; i++) {
        if (num[i] >= 10) {
            console.log(num[i])
        }
    }

}

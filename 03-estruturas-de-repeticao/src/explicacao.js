import leia from 'readline-sync';
/*var numero = 10;

console.log("----=ABAIXO WHILE-----")
while(numero < 10) {
    console.log("TESTE" + numero);

    numero++;
}
console.log("----=ABAIXO DO...WHILE-----")

do {
    console.log("TESTE" + numero);
    numero++;
}while(numero < 10);*/

/* var quantidade = 0;
while(quantidade < 50){
    console.log("NÃO CONSIGO DORMIR CEDO" + quantidade);
    quantidade++
}

 */

/* var senha = " ";

while (senha !== "1234") {
    senha = leia.question("DIGITE A SENHA: ");

    if (senha !== "1234") {
        console.log("SENHA ESTA INCORRETA!!!")
        tentativas--;
    }
}

if (tentativas > 0) {
    console.log("SENHA CORRETA!!!!")
} else {
    console.log("VOCE NAO TEM MAIS TENTATIVAS")
} */


var somaNotas = 0;
var quantidade = 5;
var contador = 1;

while( contador <= quantidade){
    var nota = leia.questionFloat(" Digite a nota " + contador );
    somaNotas = somaNotas + nota;
    contador++
}

var media = somaNotas / quantidade;
console.log(" Média:" + media.toFixed(2))

somaNotas= 0;
for(var i = 1; i <= quantidade; i++){
    var nota = leia.questionFloat(" Digite a nota" + i);
    somaNotas = somaNotas + nota;
    i++
}
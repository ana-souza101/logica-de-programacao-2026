import leia from 'readline-sync';

var contador = 0;

var num = leia.questionInt("Digite um numero (0 para encerrar): ");

while (num != 0) {

    if (num > 100 && num < 200) {
        contador++;
    }

    num = leia.questionInt("Digite outro numero (0 para encerrar): ");
}

console.log("Quantidade de numeros entre 100 e 200:", contador);
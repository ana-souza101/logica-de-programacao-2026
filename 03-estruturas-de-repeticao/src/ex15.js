import leia from 'readline-sync'

var num = leia.questionInt("Digite um número decimal: ");

var binario = "";

while (num > 0) {
    var resto = num % 2;
    binario = resto + binario;
    num = Math.floor(num / 2);
}

console.log("Número em binário:", binario);
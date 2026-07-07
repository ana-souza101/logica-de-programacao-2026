import leia from 'readline-sync';

var numMagic = Math.floor(Math.random() * 1000) + 1;

var tentativa;
var quantTent = 0;

console.log("======== JOGO NUMERO MAGICO =========");

var escolha = leia.keyInSelect(["PvE", "PvP"], "Escolha a opcao que deseja jogar:") +1;

if (escolha == -1) {
    console.log("Jogo cancelado.");
} else {

    if (escolha == 1) {
        numMagic = leia.questionInt("Mestre, escolha um numero de 1 ate 1000: ");

        while (numMagic < 1 || numMagic > 1000) {
            numMagic = leia.questionInt("Numero invalido! Digite um numero de 1 ate 1000: ");
        }

        console.clear(); 
    }

    do {

        tentativa = leia.questionInt("Digite um numero de 1 ate 1000: ");
        quantTent++;

        if (tentativa > numMagic) {
            console.log("O numero magico e MENOR!");
        } else if (tentativa < numMagic) {
            console.log("O numero magico e MAIOR!");
        } else {
            console.log("Parabens! Voce acertou o numero magico!");
            console.log("Voce usou " + quantTent + " tentativas.");
        }

    } while (tentativa != numMagic);

}
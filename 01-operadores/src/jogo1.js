import leia from 'readline-sync';

var numMagic = Math.floor(Math.random() * 1000) + 1;

let tentativa;
let quantTent = 0;

console.log("======== JOGO NUMERO MAGICO =========")

do{

    tentativa = leia.questionInt(" Digitye um numero de 1 até 1000: ")
    quantTent++;

    if(tentativa > numMagic) {
        console.log(" O numero magico é MAIOR!")
    }else if(tentativa < numMagic){
        console.log(" O numero magico é MENOR!")
    }else{
        console.log(" Parabens você acertou o numero magico!");
        console.log(" E so usou " + quantTent + " tentativas!")
    }

}while(tentativa !== numMagic);
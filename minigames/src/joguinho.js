import leia from 'readline-sync';

var bomba = Math.floor(Math.random() * 4) + 1
var tentativas = 3;

do{

console.log("============= JOGO DA BOMBA =============")
console.log("              1- Fio azul                ")
console.log("              2- Fio amarelol            ")
console.log("              3- Fio verde               ")
console.log("              4- Fio vermelho            ")
console.log("=========================================")

var fioEscolhido = leia.questionInt('Escolha um fio: ');

if (fioEscolhido === bomba) {

 console.log("BUMM!")
 break;

} else {

 tentativas--;
 console.log("Você sobreviveu!")
 console.log("Tentativas restantes:", tentativas)

}

} while(tentativas > 0);

if(tentativas === 0) {
    console.log("Parabéns! Você desarmou a bomba!")
};
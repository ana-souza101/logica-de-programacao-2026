/* 9) Você está desenvolvendo um sistema para um campeonato de futebol. Solicite o número
de vitórias, empates e derrotas de um time. Considere que: Vitória vale 3 pontos; Empate
vale 1 ponto; Derrota vale 0 pontos. Calcule a pontuação total e informe se o time terminou a
competição: Campeão (70 pontos ou mais); Classificado (entre 45 e 69 pontos); Rebaixado
(abaixo de 45 pontos). */

import leia from 'readline-sync';

var vitorias = leia.questionInt("Digite o numero de vitorias: ");
var empates = leia.questionInt("Digite o numero de empates: ");
var derrotas = leia.questionInt("Digite o numero de derrotas: ");

var pontos = (vitorias * 3) + (empates * 1) + (derrotas * 0);

console.log("Pontuacao total: " + pontos);

if ( derrotas > 20) {
    console.log("O time terminou Rebaixado!");
} else if (pontos >= 70) {
    console.log("O time terminou como Campeao!");
} else if(pontos >= 45) {
    console.log("O time terminou Classificado!");
}



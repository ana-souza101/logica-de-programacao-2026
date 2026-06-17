/* 7) Desenvolva um sistema para venda de ingressos de um cinema. Solicite a idade, se o
cliente é estudante (S/N) e o dia da semana. Considere um ingresso de R$40 e aplique os
descontos conforme as regras do enunciado, exibindo o valor final a ser pago. As regras são:
Menores de 12 anos pagam R$ 15,00, independentemente de qualquer outra condição. Às
segundas-feiras todos recebem 50% de desconto. Estudantes recebem 30% de desconto.
Caso o cliente tenha direito aos dois descontos percentuais, apenas o maior desconto
deverá ser aplicado. Ao final, apresente: Valor original; Desconto aplicado; Valor final do
ingresso.
 */

import leia from 'readline-sync';

var idade = leia.questionInt("Digite sua idade: ");
var aluno = leia.question("Você é aluno? Se sim digite S, se não N: ");
var dia = leia.question("Digite o dia da semana: ");

var ingresso = 40.00;

if (idade < 12) {

    console.log("Valor original: R$40.00");
    console.log("Desconto aplicado: preço especial para menores de 12 anos");
    console.log("Valor final: R$15.00");

} else if (dia === "Segunda-feira" || dia === "Segunda" || dia === "segunda-feira" || dia === "segunda"){
    var valorD = ingresso - (ingresso * 50 / 100);
    console.log("Valor original: R$" + ingresso);
    console.log("Desconto aplicado: 50%");
    console.log("Valor final: R$" + valorD);
} else if (aluno === "S") {
    var valorD = ingresso - (ingresso * 30 / 100);
    console.log("Valor original: R$" + ingresso);
    console.log("Desconto aplicado: 30%");
    console.log("Valor final: R$" + valorD);

} else {
    console.log("Valor original: R$" + ingresso);
    console.log("Desconto aplicado: 0%");
    console.log("Valor final: R$" + ingresso);

}
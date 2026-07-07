/* 11) Foi feita uma pesquisa entre os habitantes de um a região e coletados os dados de altura
e gênero (0=masc , 1=fem) das pessoas. Faça um programa que leia os dados de 10 pessoas
e informe:
– a maior e a menor altura encontrada;
– a média de altura das mulheres;
– a média de altura da população;
– o percentual de homens na população.
 */

var maior;
var menor;
var somaPopulacao = 0;
var qtdHomens = 0;
var qtdMulheres = 0;
var somaMulheres = 0;

import leia from 'readline-sync';

for(var i = 1; i <= 5; i++){

    var genero = leia.keyInSelect(["Masculino", "Feminino"], " Informe o seu sexo " + i + ": ") +1;
    var altura = leia.questionFloat(" Digite a sua altura: ");

    if( i === 1){
        maior =  altura
        menor = altura
    } else if(altura > maior){
        maior = altura
    } else if(altura < menor){
        menor = altura
    }

    somaPopulacao = somaPopulacao + altura;

    if (genero == 1) {
        qtdHomens++;
    }


    if (genero == 2) {
        somaMulheres = somaMulheres + altura;
        qtdMulheres++;
    }

    var mediaMulheres = 0;

if (qtdMulheres > 0) {
    mediaMulheres = somaMulheres / qtdMulheres;
}

var mediaPopulacao = somaPopulacao / 5;

var percentualHomens = (qtdHomens / 5) * 100;


}

console.log("Maior altura:", maior.toFixed(2), "m");
console.log("Menor altura:", menor.toFixed(2), "m");
console.log("Media das mulheres:", mediaMulheres.toFixed(2), "m");
console.log("Media da populacao:", mediaPopulacao.toFixed(2), "m");
console.log("Percentual de homens:", percentualHomens + "%");

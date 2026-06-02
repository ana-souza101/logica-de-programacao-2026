// Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da compra for menor que R$20,00; caso contrário, o lucro será de 30%.
// Faça um programa que entre com o valor do produto e mostre o valor de venda.

import leia from 'readline-sync';

var valor = leia.questionInt("Informe o valor do produto: ")

if (valor >= 20){
    var produtoCaro = (valor * 1.30)
    console.log("Voce deve vender esse produto por R$" + produtoCaro)
}   else {
    var produtoBarato = (valor * 1.45)
    console.log("Voce deve vender esse produto por R$" + produtoBarato)

}
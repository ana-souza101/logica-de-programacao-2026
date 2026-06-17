/* Crie um sistema para calcular o frete de uma loja virtual. Solicite o valor da compra e o
estado de destino (SP, SC, PR ou RS). Compras acima de R$500 possuem frete grátis. Caso
contrário, calcule o frete de acordo com o estado e informe o valor total da compra. 
SP = R$ 10
SC = R$ 15
PR = R$ 20
RS = R$ 25*/

import leia from 'readline-sync';

var valor = leia.questionFloat(" Digite o valor da sua compra: ")
var dest = leia.question(" Digite o destino da sua compra: ")
var fretSP = 10.00;
var fretSC = 15.00;
var fretPR = 20.00;
var fretRS = 25.00;

if(valor > 500){
    console.log(" Voce ganhou frete gratis!")
    console.log(" O valor da sua compra e: " + valor)
}else if( dest === "SP" && valor < 500){
    var valorF = valor + fretSP
    console.log(" Voce tera que pagar um frete de R$10,00")
    console.log(" O valor total da sua compra e: " + valorF)
} else if(dest === "SC" && valor < 500){
    var valorF = valor + fretSC
    console.log(" Voce tera que pagar um frete de R$15,00")
    console.log(" O valor total da sua compra e: " + valorF)
} else if(dest === "PR" && valor < 500){
    var valorF = valor + fretPR
    console.log(" Voce tera que pagar um frete de R$20,00")
    console.log(" O valor total da sua compra e: " + valorF)
} else{
    var valorF = valor + fretRS
    console.log(" Voce tera que pagar um frete de R$25,00")
    console.log(" O valor total da sua compra e: " + valorF)
}



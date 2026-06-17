/* Você está desenvolvendo o sistema de cobrança de um estacionamento. Solicite ao
usuário a quantidade de horas que o veículo permaneceu estacionado e informe se ele
possui cartão fidelidade (S ou N). Até 1 hora: R$ 8,00, Acima de 1 até 3 horas: R$ 15,00 Acima
de 3 até 6 horas: R$ 22,00 Acima de 6 horas: R$ 30,00. Clientes que possuem cartão
fidelidade recebem 15% de desconto sobre o valor. Ao final, informe o valor total a ser pago. */


import leia from 'readline-sync';

var nome = leia.question(" Digite seu nome: ")
var hora = leia.questionFloat(" Digite a quantidade de horas que seu carro ficou estacionado: ")
var cartao = leia.question(" Digite S para se voce tem cartao fidelidade e N para se nao tem: ")

if( cartao === "S" && hora <= 1){
    var valor = 8.00
    var valorD = valor - (valor * 15/100)
    console.log( nome + " você ganhou 15% de desconto!")
    console.log(" O valor que voce tera que pagar e: " + valorD)
} else if ( cartao === "S" && hora > 1 &&  hora <= 3 ){
    var valor = 15.00
    var valorD = valor - (valor * 15/100)
    console.log( nome + " você ganhou 15% de desconto!")
    console.log(" O valor que voce tera que pagar e: " + valorD)
} else if(cartao === "S" && hora > 3 && hora <= 6 ){
    var valor = 22.00
    var valorD = valor - ( valor * 15/100)
    console.log( nome + " você ganhou 15% de desconto!")
    console.log(" O valor que voce tera que pagar e: " + valorD)
} else if(cartao === "S" && hora > 6 ){
    var valor = 30.00
    var valorD = valor - ( valor * 15/100)
    console.log( nome + " você ganhou 15% de desconto!")
    console.log(" O valor que voce tera que pagar e: " + valorD)
}


if( cartao === "N" && hora <= 1){
    var valor = 8.00
    console.log(" O valor que voce tera que pagar e: " + valor)
} else if ( cartao === "N" && hora > 1 &&  hora <= 3 ){
    var valor = 15.00
    console.log(" O valor que voce tera que pagar e: " + valor)
} else if(cartao === "N" && hora > 3 && hora <= 6 ){
    var valor = 22.00
    console.log(" O valor que voce tera que pagar e: " + valor)
} else if(cartao === "N" && hora > 6 ){
    var valor = 30.00
    console.log(" O valor que voce tera que pagar e: " + valor)
}
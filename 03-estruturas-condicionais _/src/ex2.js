import leia from 'readline-sync';

var nome = leia.question(" Digite o seu nome: ")
var valor = leia.questionFloat(" Digite o valor total da sua compra: ")
var vip = leia.question(" Digite S para se você é cliente VIP ou N para se não é: ")

if( vip === "S" && valor > 1.000){
    var valorF = valor - (20/100)
    console.log(" Você ganhou 20% de desconto!")
    console.log(" O valor da sua compra ficou: " + valorF)
} else if ( vip === "S" && valor < 1.000 &&  valor > 500){
    var valorF = valor - (10/100)
    console.log(" Você ganhou 10% de desconto!")
    console.log(" O valor da sua compra ficou: " + valorF)
} else {
    var valorF = valor - (5/100)
    console.log(" Você ganhou 5% de desconto!")
    console.log(" O valor da sua compra ficou: " + valorF)
}
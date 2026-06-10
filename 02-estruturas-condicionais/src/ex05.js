import leia from 'readline-sync';

// A)
/* var cli1 = leia.question(" Digite o nome do primeiro cliente: ")
var vlr1 = leia.questionFloat(" Digite o valor da compra: ")
var cli2 = leia.question(" Digite o nome do segundo cliente: ")
var vlr2 = leia.questionFloat(" Digite o valor da compra: ")

var soma = vlr1 + vlr2;

console.log(" O valor das duas compras juntas é: " + soma) */

//B)

/* var cli1 = leia.question(" Digite o nome do primeiro cliente: ")
var vlr1 = leia.questionFloat(" Digite o valor da compra: ")
var cli2 = leia.question(" Digite o nome do segundo cliente: ")
var vlr2 = leia.questionFloat(" Digite o valor da compra: ")

var media = (vlr1 + vlr2) / 2

console.log(" O valor média das compras juntas é: " + media) */

//C)

/* var cli1 = leia.question(" Digite o nome do primeiro cliente: ")
var vlr1 = leia.questionFloat(" Digite o valor da compra: ")
var cli2 = leia.question(" Digite o nome do segundo cliente: ")
var vlr2 = leia.questionFloat(" Digite o valor da compra: ")

if( vlr1 > 20){
    console.log( cli1 + " Comprou gastou mais de R$20")
} else if(vlr2 > 20){
    console.log( cli2 + " Comprou gastou mais de R$20")
} else {
    console.log(" Ninguém gastou mais de R$20")
}
 */

//==========================================================

var cli1 = leia.question(" Digite o nome do primeiro cliente: ")
var vlr1 = leia.questionFloat(" Digite o valor da compra: ")
var cli2 = leia.question(" Digite o nome do segundo cliente: ")
var vlr2 = leia.questionFloat(" Digite o valor da compra: ")

var soma = vlr1 + vlr2;
var media = (vlr1 + vlr2) / 2

if( vlr1 > 20){
    console.log(" O valor das duas compras juntas é: " + soma)
    console.log(" O valor média das compras juntas é: " + media)
    console.log( cli1 + " Gastou mais de R$20")
} else if(vlr2 > 20){
    console.log(" O valor das duas compras juntas é: " + soma)
    console.log(" O valor média das compras juntas é: " + media)
    console.log( cli2 + " Gastou mais de R$20")
} else if(vlr1 >20 && vlr2 >20){
    
    console.log( cli1 + "e" + cli2 + " Gastaram mais de R$20")
} else{
    console.log(" O valor das duas compras juntas é: " + soma)
    console.log(" O valor média das compras juntas é: " + media)
    console.log(" Ninguém gastou mais de R$20")
}















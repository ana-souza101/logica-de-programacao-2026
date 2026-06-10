// maçã 0,30 e 0,25

import leia from 'readline-sync';

var num = leia.questionInt(" Digite o número de maçãs: ")


if( num <12){
    var vlr = num * 0.30
    console.log(" O valor final é: " + vlr)
} else {
    var vlrr = num * 0.25
    console.log(" O valor final é: " + vlrr)
}
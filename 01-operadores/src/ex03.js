// leia idade em anos, meses e dias

import leia from 'readline-sync';

var anos = leia.questionInt(" Digite a quantidade de anos: ")
var meses = leia.questionInt(" Digite a quantidade dee meses: ")
var dias = leia.questionInt(" Digite a quantidade de dias: ")

var anosEmDias = anos * 365;
var mesesEmDias = meses * 30;
var totalDias = anosEmDias + mesesEmDias + dias;

console.log(" Você viveu " + totalDias + " dias")

// var totalDias = (anos* 365) + (meses * 30) + dias;
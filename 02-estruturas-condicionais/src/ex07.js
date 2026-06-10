import leia from 'readline-sync';

var sal = leia.questionFloat(" Digite o valor do seu salário: ")
var emp = leia.questionFloat(" Digite o valor do empréstmo: ")
var par = leia.questionInt(" Digite o número de prestações: ")

var pres = emp / par;
var limit = sal * 0.30;

if(pres > limit){
    console.log(" Você não pode pegar esse empréstimo!")
} else{
    console.log(" Você pode pegar esse empréstimo!")
    console.log(" O valor das pretação é: " + pres.toFixed(2))
    console.log(" O valor do empréstimo é: " + emp)
}
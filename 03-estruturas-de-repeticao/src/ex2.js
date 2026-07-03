import leia from 'readline-sync';

var num = leia.questionInt(" Digite um númeo: ")

while(num >= 0){
    console.log(num);
    num--
}
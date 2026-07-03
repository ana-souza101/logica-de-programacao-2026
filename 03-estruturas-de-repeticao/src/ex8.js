import leia from 'readline-sync';

var somaNum = 0;
var multNum = 1;

for(var i = 1; i <= 6; i++){
    var num = leia.questionInt(" Digite o numero " + i + ": ")

    if( num % 2 === 0){
        multNum = multNum * num;
    } else {
        somaNum = somaNum + num;
    }
}

console.log(somaNum, multNum )

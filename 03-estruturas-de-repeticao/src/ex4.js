import leia from 'readline-sync'

var num = 15;
var maior;
var menor;

for(var i = 1; i <= 15; i++){

    num = leia.questionFloat(" Digite o número" + i + ": "); 

    if(i === 1){
        maior = num
        menor = num
    }else if( num > maior){
        maior = num
    } else if( num < menor){
        menor = num
    }
}

console.log( menor, maior)


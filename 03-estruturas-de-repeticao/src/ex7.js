import leia from 'readline-sync';


var meio = 500
var meioMeio = 900
var fim;

for(var i =10; i<= 1000; i++){
    if(i === meio){
        i = meioMeio
    }

    console.log(i)
}
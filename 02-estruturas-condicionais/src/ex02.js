// impar ou par

import leia from 'readline-sync';

var num = leia.questionInt("Digite um numero: ")

if(num % 2 === 0){
    console.log(" Esse número é par!")
}else{
    console.log(" Esse número é impar!")
}
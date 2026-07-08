 import leia from 'readline-sync';

/* Crie um algoritmo que receba um número e que ele mostre os números da sequência
fibonacci. (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência
fibonacci). Lembrando que a sequência fibonacci, sempre é a soma dos dois números
anteriores, começando sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5. */

var num = leia.questionInt("Digite a quantidade de termos:");

var a = 1;
var b = 1;
var c;

for (var i = 1; i <= num; i++) {
    if (i == 1) {
        console.log(a);
    } else if (i == 2) {
        console.log(b);
    } else {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
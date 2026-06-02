//ler um número e escrever seu antecessor na tela

import leia from 'readline-sync';

// entrada

var num = leia.questionInt(" Digite um número: ");

// processamento

var antecesssor = num - 1;  // ou, numero--

// saida

console.log(" O antecessor é: " + antecesssor);


// console.log(leia.questionInt(" Digite um número: ") -1)
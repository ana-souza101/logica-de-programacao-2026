import leia from 'readline-sync';

var idade = leia.questionFloat("Digite sua idade: ");

var quantMeses = idade * 12;
console.log("Quantidade de meses é: " + quantMeses);

var quantDias = idade * 365;
console.log("Quantidade de dias é: " + quantDias);


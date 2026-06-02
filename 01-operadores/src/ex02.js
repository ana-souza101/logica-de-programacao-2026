// calcular área de um retangulo

import leia from 'readline-sync';

var altura = leia.questionFloat(" Digite a altura do retangulo: ");
var largura = leia.questionFloat(" Digita a largura do retangulo: ");

var area = altura * largura;

console.log(" A área do retangulo é: " + area.toFixed(2));                                                                                                                                                              
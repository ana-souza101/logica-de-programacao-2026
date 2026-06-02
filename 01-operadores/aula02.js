/*import leia from 'readline-sync';

var nome = "Ana";
nome = "Ana Clara";
var idade1 = 16;
var idade2 = 16;

if(idade1 == idade2){
    console.log("São iguais(==)") // OPERADOR DE IGUALDADE (VALOR)
}

if(idade1 === idade2){
    console.log("São iguais(===)") // 
}
*/

import leia from 'readline-sync';

var nota1, nota2, nota3;

nota1 = leia.questionFloat(" Digite a primeira nota: ");
nota2 = leia.questionFloat(" Digite a segunda nota: ");
nota3 = leia.questionFloat(" Digite a terceira nota: ");

var media = (nota1 + nota2 + nota3) / 3

console.log(" A média é: " + media.toFixed(2))


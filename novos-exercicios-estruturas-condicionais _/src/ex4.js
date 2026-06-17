import leia from 'readline-sync';

var ladoA = leia.questionFloat("Digite o comprimento do primeiro lado: ");
var ladoB = leia.questionFloat("Digite o comprimento do segundo lado: ");
var ladoC = leia.questionFloat("Digite o comprimento do terceiro lado: ");

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){
    console.log("Você pode fazer um triângulo!");
if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Esse triângulo é Equilátero.");
 } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Esse triângulo é Isósceles.");
} else {
    console.log("Esse triângulo é Escaleno.");
}

} else {
    console.log("Você não consegue fazer um triângulo!");
}
import leia from 'readline-sync';

var maiorMedia = 0;
var melhorAluno = "";

for (var i = 1; i <= 10; i++) {

    var nome = leia.question("Digite o nome do estudante: ");

    var nota1 = leia.questionFloat("Digite a primeira nota: ");
    var nota2 = leia.questionFloat("Digite a segunda nota: ");
    var nota3 = leia.questionFloat("Digite a terceira nota: ");

    var media = (nota1 + nota2 + nota3) / 3;

    if (media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = nome;
    }
}

console.log("Estudante com a maior média:");
console.log("Nome:", melhorAluno);
console.log("Média:", maiorMedia.toFixed(2));
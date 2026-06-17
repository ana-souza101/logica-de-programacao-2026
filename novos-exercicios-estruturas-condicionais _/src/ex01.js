import leia from 'readline-sync';

var nota1 = leia.questionFloat(" Digite a primeira nota do aluno: ")
var nota2 = leia.questionFloat(" Digite a segunda nota do aluno: ")
var nota3 = leia.questionFloat(" Digite a terceira nota do aluno: ")
var nota4 = leia.questionFloat(" Digite a quarta nota do aluno: ")
var nota5 = leia.questionFloat(" Digite a quinta nota do aluno: ")
var falta = leia.questionInt(" Digite o numero de faltas do aluno: ")

var freq = (200 - falta) / 200;
var freqPor = freq * 100;
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

if( media > 7 && freqPor > 75){
    console.log(" O aluno esta aprovado!")
    console.log(" A media do aluno e: " + media)
    console.log(" A frequencia do aluno e: " + freqPor +"%")
} else {
    console.log(" O aluno esta reprovado!")
    console.log(" A media do aluno e: " + media)
    console.log(" A frequencia do aluno e: " + freqPor +"%")
}


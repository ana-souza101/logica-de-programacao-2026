import leia from 'readline-sync'

var idade = leia.questionInt(" Digite sua idade: ")

if(idade >=18){
    var nom = leia.question(" Digite seu nome completo: ")
    console.log(" Boa viagem!")
} else{
    var perm = leia.question(" Digite a permissão do seu responsável: ")
    console.log(" Permissão aceita!")
    var nom = leia.question(" Digite seu nome completo:")
    console.log(" Boa viagem!")
}
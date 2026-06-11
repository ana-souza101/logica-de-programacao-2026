import leia from 'readline-sync';

console.log("=============================================================")
console.log("=============== Doação do criança esperança =================")
console.log("=============================================================")
console.log(" 1- Doar R$10")
console.log(" 2- Doar R$25")
console.log(" 3- Doar R$50")
console.log(" 4- Outro valor")
console.log("=============================================================")

var opcao = leia.questionInt(" Digite uma opção: ")

switch(opcao){
    case 1:
        console.log(" Você doou R$10, obrigada pela sua doação!")
        break;
    case 2:
        console.log(" Você doou R$25, obrigada pela sua doação!")
        break;
    case 3:
        console.log(" Você doou R$50, obrigada pela sua doação! ")
        break;
    case 4:
        var op = leia.questionInt(" Digite o valor desejado: ")
        console.log(" Você doou R$" + op + ", obrigada pela sua doação!")
        break;
    default:
        console.log(" Opção inválida!")

}


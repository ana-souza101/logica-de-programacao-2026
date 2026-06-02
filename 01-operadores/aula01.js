import leia from 'readline-sync';

var nome = leia.question("Digite seu nome: ");

console.log(`Olá ${nome} tudo bem?`)
var idade = leia.question(`${nome} Qual a sua idade?`)

if(idade >= 16){
  var temTitulo = leia.keyInSelect(["Sim", "Não"], "Você tem título de Eleitor? ") + 1;
  if(temTitulo == 1){
    console.log(" Você pode voltar!")
  } else{
    console.log(" Você não volta!")
  }
} else {
    console.log(" Você não volta!")
}




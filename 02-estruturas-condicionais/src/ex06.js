import leia from 'readline-sync';

var prod = leia.questionFloat(" Digite o valor do produto: ")

var real = leia.questionInt("Digite a quantidade de moedas de um real: ")
var cinqCent = leia.questionInt("Digite a quantidade de moedas de 50 centavos: ") * 0.5
var vinCent = leia.questionInt("Digite a quantidade de moedas de 25 centavos: ") * 0.25
var dezCent = leia.questionInt("Digite a quantidade de moedas de 10 centavos: ") * 0.10
var cinCent = leia.questionInt("Digite a quantidade de moedas de 5 centavos: ") * 0.05

var cofre = real + cinqCent + vinCent + dezCent + cinCent;

if( cofre > prod){
    console.log(" Você consegue comprart o produto!")
}else{
    console.log(" Você não consegue comprar o produto!")
}


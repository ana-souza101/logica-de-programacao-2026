import leia from 'readline-sync'; 

var opcoes = ["PEDRA", " PAPEL", "TESOURA"]; 
var numComp = Math.floor(Math.random() * 3); // pq ele começa sempre do 0
var numUsu = leia.keyInSelect(opcoes, " Escolha sua opcao: ");

if(numUsu === -1) {
    console.log("OPCAO INVALIDA, JOGO CANCELADO!");
} else{
    console.log(" Voce escolheu: " + opcoes[numUsu]);
    console.log(" O computador escolheu: " + opcoes[numComp]);

    if(numComp === numUsu){
        console.log("EMPATOUU!")
    } else if( numUsu === 0 && numComp === 2 || numUsu === 1 && numComp === 0 ||numUsu === 2 && numComp === 1)

    {
     console.log("USUARIO GANHOUU!")
    } else{
        console.log("COMPUTADOR GANHOUU!")
    }
}


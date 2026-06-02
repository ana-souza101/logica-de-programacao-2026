// gerar um número e pedir pro usuário tentar acertar o número e repedir a pergunta até ele acertar

import readline from 'readline'

function gerarAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSecreto = gerarAleatorio(1,1000)

function perguntar(){

    rl.question("Tente adivinhar o número de 1 a 1000: ", (resposta) => {

        let tentativa = Number(resposta)

        if(tentativa > numeroSecreto){
            console.log("O número secreto é MENOR!")
            perguntar()
        }

        else if(tentativa < numeroSecreto){
            console.log("O número secreto é MAIOR!")
            perguntar()
        }

        else{
            console.log("Parabéns! Você acertou!")
            rl.close()
        }

    })

}

perguntar()
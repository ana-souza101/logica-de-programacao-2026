// var = variaevl que muda
// cont = contante, não muda

import leia from 'readline-sync';

const partes = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [
  "hospital", "computador", "alimento", "monitor", "jumento",
  "jogo", "escola", "internet", "casa", "senai", "teclado"
]

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

                             // arredonda pra baixo             // tamanho total dos itens da lista
var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)]; 
console.log(palavraSecreta);

function desenhaForca(erros){
  console.log(partes[erros]);
}

while(tentativas > 0 && venceu === false){
  //limpar a tela
  console.clear();
  console.log("============== JOGO DA FORCA ==============")
  
  desenhaForca(letrasErradas.length);

  var palavraMontada = " ";

  for(var i = 0; i < palavraSecreta.length; i++){

    // verifica se existe na lista um determinado item
    if(letrasCertas.includes(palavraSecreta[i])){
      palavraMontada += palavraSecreta[i] + " ";
    }else{
      palavraMontada += "_ "
    }

  }

  console.log(" Palavra: " + palavraMontada);
  console.log(" Tentativas restantes: " + tentativas);
  console.log(" Letras erradas: " + letrasErradas.join(', '));

  var letra = leia.question(" Digite uma letra: ").toLowerCase(); // converte pra minusculo

  if(letra.length !== 1){
    console.log(" Digite apenas uma letra.")
    leia.question(" Clique na tecla ENTER para continuar...")
  }else if(letrasCertas.includes(letra) || letrasErradas.includes(letra)){
    console.log(" Você já tentou essa letra.")
    leia.question(" Clique no ENTER para continuar...")
  } else if(palavraSecreta.includes(letra)){
    letrasCertas.push(letra);
  }else{
    letrasErradas.push(letra);
    tentativas--;
  }

  venceu = true;

  for(var i = 0; i < palavraSecreta.length; i++){
    if(letrasCertas.includes(palavraSecreta[i]) === false){
      venceu = false;
    }
  }

}


console.clear();
console.log("========= JOGO DA FORCA =========");
desenhaForca(letrasErradas.length);
if(venceu === true){
  console.log(" Parabens, voce venceu!")
}else{
  console.log(" Se fudeu!")
  console.log(" A palavra era: " + palavraSecreta)
}
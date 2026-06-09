// senha validada ou inválida
// documentos sempre String

import leia from 'readline-sync';

var senha = "1234";
var senhaUsu = leia.question(" Digite a senha: ")

if( senhaUsu === senha){
    console.log(" Acesso permitido!")
} else{
    console.log(" Acesso negado!")
}
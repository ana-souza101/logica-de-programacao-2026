import leia from 'readline-sync';

export function pedirNumeros(quantidade){
    var lista = [];
    for(var i = 0; i < quantidade; i++){
        lista[i] = leia.questionInt("Informe o número: ")
    }

    return lista;
}
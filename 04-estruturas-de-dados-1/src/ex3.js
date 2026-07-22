import leia from 'readline-sync';

export function exercicio3() {
    console.log("========= EXERCICIO 3 =========")
    var num = [];
    for (var i = 0; i < 10; i++) {
        num[i] = leia.questionInt("Informe o número: ")

    }
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            console.log(num[i])
        }
    }

}



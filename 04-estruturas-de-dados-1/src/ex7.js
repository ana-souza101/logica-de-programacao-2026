import leia from 'readline-sync';

var pai = [];
var mae = [];
var filho = [];

export function exercicio7() {
    for (var i = 0; i < 50; i++) {
        pai[i] = Math.floor(Math.random() * 100) + 1;
        mae[i] = Math.floor(Math.random() * 100) + 1;
    }

    for (var i = 0; i < 50; i++) {

        if (pai[i] % 2 == 0) {
            filho[i] = pai[i];
        } else {
            filho[i] = mae[i];
        }

    }

    console.log("Pai:   ", pai);
    console.log("Mãe:   ", mae);
    console.log("Filho: ", filho);
}


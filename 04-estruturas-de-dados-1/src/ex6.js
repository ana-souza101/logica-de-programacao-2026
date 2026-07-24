import leia from 'readline-sync';

/* Criem um algoritmo que tenha dois vetores de 30 posições,
um para armazenar a mínima de cada dia e outro para a
máxima;
- Usando a função Math.random(), gerem dois valores de
temperatura para o dia. Estes valores devem estar entre 12 e
35 graus.
- De posse destes dois valores gerados, coloquem o menor no
vetor de mínimas e o maior no vetor de máximas. */

export function exercicio6() {

    var maior = [];
    var menor = [];

    for (var i = 0; i < 30; i++) {
        var temp1 = Math.floor(Math.random() * 24) + 12
        var temp2 = Math.floor(Math.random() * 24) + 12

        if (temp1 < temp2) {
            menor[i] = temp1;
            maior[i] = temp2;
        }
        else {
            menor[i] = temp2;
            maior[i] = temp1;
        }
    }

    for (var i = 0; i < 30; i++) {
        console.log(" Dia " + (i + 1) + ": ");
        console.log(" Temperatura Mínima: " + menor[i] + "°C")
        console.log(" Temperatura Máxima: " + maior[i] + "°C")
    }


}
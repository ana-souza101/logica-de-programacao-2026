/* 8) Você está desenvolvendo um sistema para uma empresa de energia elétrica. Solicite o
consumo de energia (kWh) e calcule o valor da conta. Regras: Até 100 kWh → R$ 0,60 por
kWh
De 101 a 300 kWh → R$ 0,75 por kWh; Acima de 300 kWh → R$ 0,90 por kWh; Caso o cliente
seja beneficiário da tarifa social (S/N), conceda 20% de desconto sobre o valor final.
 */

/* Consumo de energia	Valor por kWh
Até 100 kWh	R$ 0,60
De 101 a 300 kWh	R$ 0,75
Acima de 300 kWh	R$ 0,90 */

import leia from 'readline-sync';

var tarifa = leia.question("Voce e beneficiario da tarifa social? Se sim, digite S, se nao digite N: ");
var kWh = leia.questionFloat("Digite o consumo de energia (kWh): ");

if (kWh <= 100) {

    var vlrFinal = kWh * 0.60;

    if (tarifa === "S") {
        var vlrD = vlrFinal - (vlrFinal * 20 / 100);
        console.log("Voce recebeu um desconto de 20%!");
        console.log("O valor final e: R$ " + vlrD);
    } else {
        console.log("O valor final e: R$ " + vlrFinal);
    }

} else if (kWh >= 101 && kWh <= 300) {

    var vlrFinal = kWh * 0.75;

    if (tarifa === "S") {
        var vlrD = vlrFinal - (vlrFinal * 20 / 100);
        console.log("Voce recebeu um desconto de 20%!");
        console.log("O valor final e: R$ " + vlrD);
    } else {
        console.log("O valor final e: R$ " + vlrFinal);
    }

} else {

    var vlrFinal = kWh * 0.90;

    if (tarifa === "S") {
        var vlrD = vlrFinal - (vlrFinal * 20 / 100);
        console.log("Voce recebeu um desconto de 20%!");
        console.log("O valor final e: R$ " + vlrD);
    } else {
        console.log("O valor final e: R$ " + vlrFinal);
    }

}
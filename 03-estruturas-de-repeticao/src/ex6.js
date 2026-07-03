import leia from 'readline-sync'

var num = leia.questionInt(" Digite o número pra tabuada: ")

for (var i = 0; i <= 10; i++) {
    var tab = i * num;
    console.log( num + " x "+ i + " = " + tab);
}
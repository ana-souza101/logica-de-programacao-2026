import leia from 'readline-sync';
import {exercicio1} from './ex1.js';
import {exercicio3} from './ex3.js';
import { exercicio2 } from './ex2.js';
import { exercicio4 } from './ex4.js';
import { exercicio5 } from './ex5.js';

console.log("======== MENU DE EXERCICIOS ========");

var opcao = leia.keyInSelect([
    "EXERCICIO 1",
    "EXERCICIO 2",
    "EXERCICIO 3",
    "EXERCICIO 4",
    "EXERCICIO 5",
    "EXERCICIO 6",
    "EXERCICIO 7",
    "EXERCICIO 8",
    "EXERCICIO 9",
    "EXERCICIO 10",
    "EXERCICIO 11",
    "EXERCICIO 12",
    "EXERCICIO 13",
], "Escolha o exercicio:") + 1;

switch(opcao){
    case 1:
        exercicio1();
        break;
    case 2:
        exercicio2();
        break;
    case 3:
        exercicio3();
        break;
    case 4:
        exercicio4();
        break;
    case 5:
        exercicio5();
        break;
}


// último número da placa de um carro

import leia from 'readline-sync';

var ultDig = leia.question(" Digite a último digito da placa do seu seu carro: ") // var ud = placa[placa.lenght -1];

switch(ultDig){
    case "0":
    case "1":
        console.log(" Você não pode rodar na segunda-feira!")
        break;
    case "2":
    case "3":
        console.log(" Você não pode rodar na terça-feira!")
        break;
    case "4":
    case "5": 
        console.log(" Você não pode rodar na quarta-feira!")
        break;
    case "6":
    case "7":
        console.log(" Você não pode rodar na quinta-feira!")
        break;
    case "8":
    case "9":
        console.log(" Você nmão pode rodar na sexta-feira!")
        break;
   default:
    console.log(" Placa inválida!")
        
}

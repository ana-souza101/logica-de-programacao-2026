import leia from 'readline-sync';

var temp = leia.questionFloat(" Digite a temperatura: ")

if( temp < 50 ){
    console.log(" Resfriamento Crítico!");
} else if ( temp >= 50 && temp <= 89){
    console.log(" Normal!");
}else if ( temp >= 90 && temp <= 110){
    console.log(" Atenção!");
} else{
    console.log(" Superaquecimento!");
}
import leia from 'readline-sync'

let nome = leia.question("digite seu nome: ");
let salario = leia.questionFloat("digite seu salário: ");
let Qdependentes = leia.questionInt("digite a quantidade de dependentes: ")


if (Qdependentes === 0){
    let soma1 = salario * 1.02
    console.log(nome);
    console.log("quantidade de dependetes: "+ Qdependentes);
    console.log("o seu salario incial é de: "+ salario )
    console.log("o percentual adicionado é de: 2% , sendo assim...");
    console.log("o seu salario final com o percentual é de: " + soma1)    
}
else if (Qdependentes === 1 ){
    let soma2 = salario * 1.05
    console.log(nome);
    console.log("quantidade de dependetes: "+ Qdependentes);
    console.log("o seu salario incial é de: "+ salario )
    console.log("o percentual adicionado é de: 5% , sendo assim...");
    console.log("o seu salario final com o percentual é de: " + soma2)    
}
else if (Qdependentes === 2 ){
    let soma3 = salario * 1.07
    console.log(nome);
    console.log("quantidade de dependetes: "+ Qdependentes);
    console.log("o seu salario incial é de: "+ salario )
    console.log("o percentual adicionado é de: 7% , sendo assim...");
    console.log("o seu salario final com o percentual é de: " + soma3)    
}
else if (Qdependentes === 3 ){
    let soma4 = salario * 1.10
    console.log(nome);
    console.log("quantidade de dependetes: "+ Qdependentes);
    console.log("o seu salario incial é de: "+ salario )
    console.log("o percentual adicionado é de: 10% , sendo assim...");
    console.log("o seu salario final com o percentual é de: " + soma4)    
}
else {
    let soma5 = salario * 1.15
    console.log(nome);
    console.log("quantidade de dependetes: "+ Qdependentes);
    console.log("o seu salario incial é de: "+ salario )
    console.log("o percentual adicionado é de: 15% , sendo assim...");
    console.log("o seu salario final com o percentual é de: " + soma5)    
}

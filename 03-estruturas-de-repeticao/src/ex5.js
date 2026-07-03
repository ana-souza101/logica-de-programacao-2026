import leia from 'readline-sync';


for (let i = 1; i <= 500; i++) {
    let valor= i * 0.33;
    console.log("cópia " + i + ": " + valor.toFixed(2));
}

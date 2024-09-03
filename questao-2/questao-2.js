const readlineSync = require('readline-sync');

function isFibonacci(num) {
    let a = 0, b = 1;
    
    if (num === 0 || num === 1) {
        return true;
    }

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === num;
}

let numero = parseInt(readlineSync.question('Informe um numero para verificar se ele pertence a sequencia de Fibonacci: '));

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
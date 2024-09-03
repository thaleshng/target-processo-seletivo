const readlineSync = require('readline-sync');

let inputString = readlineSync.question('Digite uma string para inverter: ');

let invertedString = '';

for (let i = inputString.length - 1; i >= 0; i--) {
    invertedString += inputString[i];
}

console.log(`String invertida: ${invertedString}`);
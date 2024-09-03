const readline = require('readline-sync');

const entradaString = readline.question('Informe uma string: ');

function contarLetraA(str) {
    let contador = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a') {
            contador++;
        }
    }
    return contador;
}

const testeString = contarLetraA(entradaString);

if (testeString > 0) {
    console.log(`A letra 'a' ocorre ${testeString} vezes na string.`);
} else {
    console.log("A letra 'a' não foi encontrada na string.");
}
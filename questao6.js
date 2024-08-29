const prompt = require('prompt-sync')();

const numero = parseInt(prompt('digite um número: '), 10);

function exibirFibonacci(num) {
    if (num < 0) {
        console.log('Número deve ser maior ou igual a 0');
        return;
    }

    let a = 0, b = 1;

    console.log('Sequência de Fibonacci:');
    while (a <= num) {
        console.log(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
}

exibirFibonacci(numero);

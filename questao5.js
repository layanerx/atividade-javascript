const prompt = require("prompt-sync")()

function numPrimo(num) {
    for (let divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

let num = prompt("digite um número: ")

for (let i = num; i >= 2; i--) {
    if(numPrimo(i)) console.log(i);
}
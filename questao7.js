const prompt = require("prompt-sync")()

console.log("o laço permane até receber a entrada '0'.")

let maximo = Number()
let minimo = Number()

do {
    let inserir = Number(prompt("digite um número: "))

    if (inserir > maximo) {
        maximo = inserir
    }

    if (inserir < minimo) {
        minimo = inserir
    }

} while (inserir != 0);

console.log("o menor número é " + inserir)

console.log("o maior número é " + maximo)
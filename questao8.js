const prompt = require("prompt-sync")()

let frase = prompt("digite uma frase: ")

let numDeVogais = 0

for (let i = 0; i < frase.length; i++) {
    switch (frase.charAt(i)) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':    
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            numDeVogais++
        default:
            continue;
    }
}

console.log("a frase contém " + numDeVogais + " vogais")
const prompt = require("prompt-sync")()

let diaSemana = prompt("escreva um dia da semana:")


if (diaSemana == 'sabado' || diaSemana == 'sábado' || diaSemana == 'domingo') {
        console.log('Não é dia útil');
    }else {
        console.log('É dia útil');
    }

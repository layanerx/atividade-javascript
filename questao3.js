const prompt = require("prompt-sync")()

const idade1 = parseInt(prompt('digite a primeira idade'));
const idade2 = parseInt(prompt('digite a segunda idade'));
const idade3 = parseInt(prompt('digite a terceira idade'));

function VerificarMaioridade (idade){
    return idade>=18;
}

const verificacao1 = VerificarMaioridade(idade1);
const verificacao2 = VerificarMaioridade(idade2);
const verificacao3 = VerificarMaioridade(idade3);


if (verificacao1 && verificacao2 && verificacao3){
    console.log('todos sao maiores de idade');
}else if (!verificacao1 && !verificacao2 && !verificacao3){
    console.log('todos sao menores de idade');
}else{
    console.log('Algum é menor de idade');
}


const prompt = require("prompt-sync")()

const num1 = parseFloat(prompt('digite um numero'));
const num2 = parseFloat(prompt('digite um numero'));
const num3 = parseFloat(prompt('digite um numero'));

let maiorNum, menorNum;


if  (num1 >= num2 && num1>num3){
    maiorNum = num1;
}else if(num2>= num1 && num2 >= num3){
    maiorNum = num2;
}else{
     maiorNum = num3;
}

if  (num1 < num2 && num1<num3){
    menorNum = num1;
}else if(num2< num1 && num2< num3){
    menorNum = num2;
}else{
    menorNum = num3;
}

console.log('o maior numero entre os digitados é', maiorNum);
console.log('o menor numero entre os digitados é', menorNum);
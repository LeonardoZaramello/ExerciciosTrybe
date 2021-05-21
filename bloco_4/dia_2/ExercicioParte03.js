let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediaAritmetica = 0;

for(let contador = 0; contador < numbers.length; contador += 1){
  soma = soma + numbers[contador];
}

mediaAritmetica = soma / numbers.length;
console.log(mediaAritmetica);
console.log(soma);
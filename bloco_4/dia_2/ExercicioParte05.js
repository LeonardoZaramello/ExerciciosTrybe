let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero;
maiorNumero = numbers[0];

for(let contador = 0; contador < numbers.length; contador += 1){
  if(numbers[contador] > maiorNumero){
    maiorNumero = numbers[contador];
  }else{
    maiorNumero = maiorNumero;
  }

}

console.log(maiorNumero);
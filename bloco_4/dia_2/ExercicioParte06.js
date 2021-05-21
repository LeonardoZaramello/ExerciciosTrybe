let numbers = [4, 8, 4, 20, 70, 8, 100, 2, 36, 27];
let numeroImpar = 0;


for(let contador = 0; contador < numbers.length; contador += 1){
  if(numbers[contador] % 2 == 1){
    numeroImpar += 1;
  }
}

if(numeroImpar == 0){
  console.log('nenhum valor ímpar encontrado');
}else{
  console.log(numeroImpar);
}
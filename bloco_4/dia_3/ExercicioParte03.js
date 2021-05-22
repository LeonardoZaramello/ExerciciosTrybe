// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 10;
let n2 = 10;
let ast = 'a';
let asterisco = '*';
let lista = [];

for(let linha = 1; linha <= n; linha += 1){

  for(let coluna = n2; coluna > 0; coluna -= 1){

    if(coluna < n2){
      lista[coluna] = ast;
    }else{
      lista[coluna] = asterisco;
    }

  }

n2 -= 1;
console.log(lista);

}


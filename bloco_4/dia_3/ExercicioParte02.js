// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****
let ast = '*';
let asterisco = '*';
let lista = [];

for(let n = 0; n < 5; n += 1){

  lista[n] = asterisco;
  console.log(lista[n]);
  asterisco += ast;
}
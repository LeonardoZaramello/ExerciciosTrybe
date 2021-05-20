let custo = 40;
custo = custo * 1.2;

let valor = 200;
let lucro = (valor - custo);
let vendas = 2;


if(vendas > 0){
  console.log(lucro * vendas);
}else if(vendas <= 0){
  console.log('Numero de vendas inválido');
}
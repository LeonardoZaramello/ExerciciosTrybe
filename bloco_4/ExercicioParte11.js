let bruto = 3000;
let base = 0;
let liquido = 0;

console.log('Salário bruto: R$' + bruto);

//INSS
if(bruto > 0 && bruto <= 1556.94){
  bruto = bruto * 0.92;
}else if (bruto >= 1556.95 && bruto <= 2594.92){
  bruto = bruto * 0.91;
}else if (bruto >= 2594.93 && bruto <= 5189.82){
  bruto = bruto * 0.89;
}else if (bruto > 5189.82){
  bruto = bruto - 570.88;
}else{
  console.log('Valor invalido');
}

console.log('Salario bruto - INSS = Salário base: R$' + bruto);
base = base + bruto;

//IR
if(base > 0 && base <= 1903.98){
  base = base;
  liquido = base;
}else if (base >= 1903.99 && base <= 2826.65){
  base = base * 0.925;
  liquido = base + 142.80;
}else if (base >= 2826.66 && base <= 3751.05){
  base = base * (1-15/100);
  liquido = base + 354.80;
}else if (base >= 3751.06 && base <= 4664.68){
  base = base * (1-22.5/100);
  liquido = base + 636.13;
}else if (base > 4664.68){
  base = base - 570.88;
  liquido = base + 869.36;
}

console.log('Salário base - IR: ' + base);
console.log('Salário Líquido + dedução de imposto: ' + liquido);
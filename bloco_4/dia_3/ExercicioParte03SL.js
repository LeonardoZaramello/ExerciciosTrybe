let numeroDeLinha = 10;
let numeroDeColuna = 10;
let str = "";

for(let linha = 1; linha < numeroDeLinha; linha += 1){

  for(let coluna = 1; coluna < numeroDeColuna; coluna += 1){

    if(linha + coluna >= numeroDeLinha){
      str = str.concat ('*');
    }else{
      str = str.concat (' ');
    }

  }

str = str.concat('\n');

}
console.log(str);
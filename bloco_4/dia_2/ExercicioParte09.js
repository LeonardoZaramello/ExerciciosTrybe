let lista = [];

for(let index = 0; lista.length < 25; index += 1){

  lista[index] = Math.ceil(Math.random() * 60);
  let divisao = lista[index] / 2;
  console.log(divisao);

}

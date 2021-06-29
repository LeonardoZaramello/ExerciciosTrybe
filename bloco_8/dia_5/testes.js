// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'laranja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['acerola', 'mamão', 'peira'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
let peca = 'peao';

switch (peca.toLowerCase()) {
  case 'peao':
    console.log('Movimentação de 1 casa somente para a frente, come na diagonal');
    break;
  case 'cavalo':
    console.log('Movimentação de "L"');
    break; 
  case 'bispo':
    console.log('Movimentação sem limite na diagonal-"X"');
    break;
  case 'torre':
    console.log('Movimentação sem limite em cruz-"+"');
    break;
  case 'rei':
    console.log('Movimentação de 1 casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Movimentação sem limite em qualquer direção');
    break;
  default:
    console.log('Por favor informe uma peça de xadrez');
}
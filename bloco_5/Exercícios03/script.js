document.getElementsByTagName('p')[0].innerText = "Com um ótimo trabalho";
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'rgb(255,255,255)';
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript'

let paragrafos = document.getElementsByTagName('p');
for (let index = 0; index < paragrafos.length; index += 1){
  paragrafos[index].style = 'text-transform: uppercase';
}

console.log(paragrafos);

// Autera conteudo
// TextContent

const element = document.querySelector('h1');
element.textContent = "Olá Devs!"

console.log(element.textContent);


// innerText - trocar o texto interno do HTML
const element01 = document.querySelector('h1');
element01.innerText = "Olá Devs!"


//Trocar o conteúdo interno do HTML add HTML atraves do JavaScript
const element02 = document.querySelector('h1');
element02.innerHTML = "Olá Devs! <small>!!!</small>";


// Manipula o valor de um input
const element03 = document.querySelector('input');

console.log(element03.value); // pegar valor
element03.value = "valor do input"; //atribuir valor


// Manipulando atributos dos elementos
const header = document.querySelector('header');

header.setAttribute('id', 'header'); // Adicionar atributos
header.setAttribute('class', 'header'); // Adicionar atribut

const headerId = document.querySelector('#header');

// Pegar o atributo
console.log(headerId.getAttribute('id'));
console.log(headerId.getAttribute('class'));

header.removeAttribute('class'); //removento atributo
console.log(headerId.getAttribute('class'));

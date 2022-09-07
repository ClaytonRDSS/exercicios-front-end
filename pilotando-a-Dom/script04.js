// Navegando pelos elementos
//parentNode / parentElement

const body = document.querySelector('body');
const header = document.querySelector('h1');

console.log(body.parentNode); // qual e o do pai de body
console.log(header.parentElement); // qual e o do pai de h1


// pegando todos os filhos
const el = document.querySelector('body')

console.log(el.childNodes); // quais e os filhos do body
console.log(el.children); // pega os filhos do body e elimina os espaços


// Navegar pelos elementos irmaos
//nextSibling nextElementSibling

const els = document.querySelector('header')

console.log(els.nextSibling); 
console.log(els.nextElementSibling);
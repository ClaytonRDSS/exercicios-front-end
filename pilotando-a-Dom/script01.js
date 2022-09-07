// - Captura um elemento por (id) getElementById(retorna o emento);

const element = document.getElementById('blog-title');

console.log(element);


// Capturar o elemento pelo nome da classe - getElemenByClassName(HTMLCollection);
const element01 = document.getElementsByClassName('blog-title01');

console.log(element01);


//Capturar elementos pelo nome da Tag getElementsByTagName(retorna HTMLCollection)
const element02 = document.getElementsByTagName('h2');

console.log(element02);


// Capitura o elemento pelo Seletores querySelector(retorna o emento);
const element03 = document.querySelector('meta');

// Capitura todos os elementos com seletores identicos querySelectorAll(Retorna Nodelist/ forEach).
const element04 = document.querySelectorAll('meta');

console.log(element03);
console.log(element04);

element04.forEach(el => console.log(el));
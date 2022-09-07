// Alterando o estilo da pagina

//const element = document.querySelector('body');

// Atribuir estylo ao HTML
//element.style.backgroundColor = 'red';

// Pegar o estyloa aplicado
//console.log(element.style.backgroundColor);


//Alterando estilo con classList
const element01 = document.querySelector('body');

element01.classList.add('green'); // adiciona classe e estilo
element01.classList.remove('green'); // remover classe e estilo 
element01.classList.toggle('green'); // essa função verifica de a propiedade ja existe se sim ela remove se não ela adiciona.
console.log(element01.classList);
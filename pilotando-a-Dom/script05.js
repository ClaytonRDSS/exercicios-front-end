// Criando e adicionando Elementos no HTML


/// createElement = criar o elemento
const div = document.createElement("div");
const h2 = document.createElement("header");
div.innerText = "Criando Elementos no HTML";
h2.innerText = "Subtitle of header";


// append = add alguma coisa
const body = document.querySelector("body");
body.append(div);

const header = document.querySelector("header");
header.append(h2)


//prepend = add antes de qualquer elemento
body.prepend(div)



// adicionar um elemento entre outros dois elementos
const script = body.querySelector('script')
body.insertBefore(div, script); // posição 1 novo elemento e position 2 elemento no qual o elemento 1 ficara na frente/antes;

body.insertBefore(div, header.nextElementSibling); // posicionar o elemento depois do header



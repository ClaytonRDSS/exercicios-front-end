// eventos / on

//eventos do mouse
//onClick
function print() {
    console.log('print');
} 


// eventos do teclado

const input = document.querySelector('input');

// eventos do teclado quando alguma tecla for acionada para baixo
input.onkeydown = function() {
    console.log('rodei');
}


const h1 = document.querySelector('h1');

// adicionar um ouvidor de eventos / addEventListener()
h1.addEventListener('click', print)
h1.addEventListener('mouseover', print)


//outra maneira de executar eventos via javaScript
h1.addEventListener('click', function() {
    console.log('rodei');
})



// Argumento - event

//const input = document.querySelector('input');

input.onkeydown = function(event) {
    console.log(event);
}

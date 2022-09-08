// clearTimeout cancelar um timeout depois de 3 milissegundos

const timeOut = 3000;

const finished = () => console.log('done!')


let time = setTimeout(finished, timeOut) // Guarda a função para ser chamada depois

clearTimeout(time); // cancela a chamada da função.
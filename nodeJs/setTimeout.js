// setTimeout vai rodar uma função depois de x milissegundos

const timeOut = 3000;

const finished = () => console.log('done!')


setTimeout(finished, timeOut) // finished - função collback é chamada é armazenada e depois de 3 segundos chamada de volta 

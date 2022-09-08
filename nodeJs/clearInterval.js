// clearInterval ira cancelar um setInterval registrado.

const timeOut = 1000;

const checking = () => console.log('checking!');

let cancel = setInterval(checking, timeOut)

setTimeout( () => clearTimeout(cancel), 4000) // executar a função e depois de 3 segundos cancelart.


// setInterval iá rodar uma função N vezes
// deposi de x milissegundos

const timeOut = 3000;
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut);

clearInterval(interval);
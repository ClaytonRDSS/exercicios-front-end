// eslint-disable-next-line no-undef
const { EventEmitter } = require('events');

const ev = new EventEmitter();


ev.on('saySomething', (message) => {
    console.log('Eu ouvir você', message)
}); // ouvir e executar o evento.

//ev.once('saySomething', () => {
//    console.log('Eu ouvir você')
//}); // ouvir e executar o evento somente uma vez.

ev.emit('saySomething', 'Clayton'); // disparando / emitir o evento.
ev.emit('saySomething', 'joão')

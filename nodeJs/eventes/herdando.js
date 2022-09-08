const { inherits }   = require('util'); 
const { EventEmitter } = require('events');

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter); // erdando para o character todos as funções do EventEmitter(on(), emit()...)

const chapolin = new Character('Chapolin');

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log('Oh! e agora, quem poderá me defender?');

chapolin.emit('help');
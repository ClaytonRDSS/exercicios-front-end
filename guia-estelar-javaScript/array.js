// Manipulando Arrays

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodeJs");

// Adicionar no começo
techs.unshift("sql");

//Remover do fim  
techs.pop()

//Remover do começo
techs.shift()

//Pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) // qual a posição de início / posção final

//Remover um ou mais itens do array
//techs.splice(1, 1) // posição do elemento / e quantidade de elemento

//Encontra a posição de um elemento no array
let index = techs.indexOf("css");
techs.splice(index, 1)

console.log(techs);
console.log(index);
let x = 13;
 x + 17


/*
    Prototype

        * prototype-based language
        * prototype chain
        * __proto__
        
    O javaScript é uma linguagem prototipada. Possuindo muitas funcionalidades pré-definidas.
    Ex: "Clayton"., ao colocar o ponto(.) em algumas funcionalidades, vc tera acesso aos prototipos
    pré-definidos

*/

const animal = function(name) {
    console.log(name)
}


animal("Gato");


/*
    Type conversion(typecasting) / eu faço a troca  vs Type coersion / javaScript faz a troca
        * Alteração de um tipo de dado para outro tipo.

*/

console.log('9' + 5) // = 95 (Type coersion)

console.log(Number('9') + 5) // 14 (typecasting)
const animals = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Dog',
        age: 10
    }
]

// Acessando o conteúdo do array atravez da posição dos elementos. primeira posição é sempre zero.
console.log(animals[2]);

//Colocando mais um elemento dentro do array
//animals.push('Dog');

//Retirando o ultimo elemento do array
//animals.pop();

//Recebendo o tamanho do array
console.log(animals.length)

// Consultando Objeto dentro de um array
console.log(animals[3].name)

// Crinado arrays com construtor

let myArray = new Array("1", "2", "3")
myArray.push("Clayton");
myArray.push("Dayane");
myArray.push("Júnior");
myArray.push("Valdir");

console.log(myArray);

// Contando elemenstos do array
console.log([
    "a",
    {type: "array"},
    function() {return "ALO";},
][0])

console.log([
    "a",
    {type: "array"},
    function() {return "ALO";},
][1].type)

console.log([
    "a",
    {type: "array"},
    function() {return "ALO";},
][2]())


// Transforma uma cadeia de caracteres em elementos de um array
let word = "manipulação";
console.log(Array.from(word));

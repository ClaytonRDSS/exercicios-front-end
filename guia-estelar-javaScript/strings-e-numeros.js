// Manipulando Strings e Números

// Transformando Strings em número e número em String


let string = "123";
console.log(Number(string));

let number = 321;
console.log(String(number));

// Contando quantos carcteres tem uma palavra e quantos digitos tem um número

let word = "hello word";
console.log(word.length);

let numero = 1234567;
console.log(String(numero).length); // Transformar em string pq número não tem acesso afunção length.


// Transformar um número quebrado com 2 casa decimais e tracar o ponto por virgula.

let numb = 345.33452345;
console.log(numb.toFixed(2).replace("." , ","));  
// (toFixed) transforma o número depois do ponto em duas casas decimais.
// (replace) Altera o ponto para uma virgula


// Transforma letras em maiúsculas (toUpperCase())
// Transforma letras em minúsculas (toLowerCase())


// Separando Strings


let phrase = "Eu quero viver o Amor"
let myArray = phrase.split(" "); // .split(): transforma para array e define como o texto sera separado.
let phrasesWithUnderscore = myArray.join("_"); // .join(): transforma para string e junta os dois arrays e separar o texto por underscore(_)
console.log(phrasesWithUnderscore);

// Encontrando palavra na frase

let phrases = "Eu quero viver o Asmor";
console.log(phrases.includes("Amor")); 
// .includes(): verifica se a palavra esta no texto / é caseSencitive 
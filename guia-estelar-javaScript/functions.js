// Criar um aplicativo de frases motivacionais com functions;
// Agrupamento de código / reutilizaçõa de código;

// Declaração de funções
function appPhrases() {
    console.log("Estudar é muito bom");
    console.log("Paciência e percitência");
    console.log("Revisão é a mãe do aprendizado");
}

//Executando a function / chamada 
console.log(appPhrases());

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

let copo = fazerSuco('maçã', 'banana');

console.log(copo);

//Function hoisting

sayMyname()

function sayMyname() {
    console.log('Clayton');
}

//Não funciona em funções anonimas

sayMyname()

//const sayMyname = function() {
//    console.log("Clayton")
//}


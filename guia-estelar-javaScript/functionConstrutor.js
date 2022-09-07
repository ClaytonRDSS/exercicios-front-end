/*
    Functon() Construtor

        * Expressão new
        * Criar um novo Objeto
        * this Keyword
*/


function Person(name, age) {
    this.name = name,
    this.age = age
    this.walk = function() {
        return this.name + " está andando. "
    }
}

const clayton = new Person("Clayton", 35); // Função Construtora / crinado um objeto de Person.
const Dayane = new Person("Dayane", 33);

console.log(clayton.walk());
console.log(Dayane.walk());

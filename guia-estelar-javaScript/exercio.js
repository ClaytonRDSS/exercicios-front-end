
let weigth;
console.log(typeof weigth);

////////////////////////////

//Declarando variaveis e seus valores
//let name = "Clayton"; //String
//let age = 35; // Number(Integer)
//let stars = 1.76; // Number(Float)
//let isSubscribed = true; // Boolean

let studant = {
    name: 'clayton',
    age: 35,
    weigth: 104.5,
    isSubscribed: true
}
let studant01 = {
    name:'Dayane',
    age: 33,
    weigth: 70,
    isSubscribed: true
}
//console.log(`${studant.name} tem de adade ${studant.age} e pesa ${studant.weigth} KG`);


//Inserindo o objeto na posição um(1) do array studants
let studants = [
    studant,
    studant01
]

//Outra forma de inserir o objeto na posição um(1) do array studants
studants[1] = studant01;

console.log(studants);
console.log(studants[1]);
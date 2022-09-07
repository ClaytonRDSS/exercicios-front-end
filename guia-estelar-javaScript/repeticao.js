/*
    for / para
    while / enquanto
    for of /
    for in /
*/

/*For*/
 

for(let cont = 0; cont <= 10; cont++) {
    console.log(cont)
}

for(let i = 10; i >= 0; i--) {
    if (i === 5) {
        continue; // pula o valor informado no (if)
    }
    console.log(i)
}

/*While*/

let i = 0;

while(i <= 10) {
    console.log(i);
    i++;
}

/*For..of*/

let na = 'Clayton';
let names = ['clayton', 'Dayane', 'Júnior'];

for(let char of na) {
    console.log(char)
}

for(let na of names) {
    console.log(na);
}


/*For...in*/

let person = {
    name: 'John',
    age: 35,
    weight: 104
}

for(let property in person) {
    console.log(property);
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}
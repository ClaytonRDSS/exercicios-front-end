/*
    Controle de fluxo da aplicação
*/

/* IF ... ELSE */
let temperature = 37

if(temperature >= 37.0) {
    console.log("Está com febre");
} else {
    console.log("sem febre");
}

/*
    Switch case
*/

let expression = 0;

switch(expression) {
    case 'a':
        console.log('a');
        break;
    
    case 'b':
        console.log('b');
        break;

    case 14: 
        console.log(14);
        break;

    default:
        break;
}

/*
    Calculadora com switch
*/


function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number1;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log("não implementado");
            break;
    }
    return result
}

console.log(calculate(5, '*', 5));
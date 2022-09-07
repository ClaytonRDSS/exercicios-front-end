// Celsius em Fahrenheit


function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // Fluxo de Error
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Gral não identificado');
    }

    // Fluxo Fahrenheit => Celsius
    let updatedDegree =  Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => fahrenheit - 32 * 5/9
    let degreeSin = 'C'

    // Fluxo Celsius => Fahrenheit
    if(celsiusExists) {
         updatedDegree =  Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSin = 'F'
    }

    return formula(updatedDegree) + degreeSin;

}


try{
    console.log(transformDegree('35C'));
    //transformDegree('50Z');
}catch (error) {
    console.log(error.message)
}
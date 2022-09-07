// Sistema de gastos familiar

let family = {
    receita: [3000, 2500, 250, 360.45],
    despesas: [320.21, 128.50, 176.87, 1500.00, 4000.00, 1500.00]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}

function calcularBalace() {
    const calcularReceitas = sum(family.receita)
    const calcularDespesas = sum(family.despesas)

    const total = calcularReceitas - calcularDespesas

    const itsOk = total >= 0;

    let balanceText = "negativo";

    if(itsOk) {
        balanceText = "positivo";
    }
    console.log(`Seu saldo é ${balanceText}: R$: ${total.toFixed(2)}`)
}

calcularBalace()

// throw = lançar/ disparar 
// try = tentar ...catch = capturar 



function sayMyNaname(name) {
    if (name === ''){
        throw 'Nome é obrigatorio'
    }

    console.log('depois do erro')
}

try{
    sayMyNaname() // tentar executar a função
}catch(e) { // vai capturar a mensagem do (throw)
    console.log(e)
}
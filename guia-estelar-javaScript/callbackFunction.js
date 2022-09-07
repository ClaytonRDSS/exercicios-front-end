// callback function / chamar de volta.

function sayMyname(name) {
    console.log("antes de chamar a função callback");
    name()

    console.log("depois de executar a fução callback")
}

// chama uma função(sayMyname) e chama a outra () => {} 
sayMyname(
    () => {
        console.log("Estou em uma callback");
    }
)
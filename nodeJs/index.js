//process.stdout.write("Alguma coisa") // saida padrão do processo
//process.stdin.on("data", data => {}) ouvido eventos tipo entrada no console e vai rodar a função / assincrono

const questions = [
    "- O que apredi hoje?",
    "- O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "- O que me deixou feliz hoje?",
    "- Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    // eslint-disable-next-line no-undef
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

// eslint-disable-next-line no-undef
process.stdin.on("data", data => {
    // eslint-disable-next-line no-undef
   answers.push(data.toString().trim())
   if(answers.length < questions.length) {
        ask(answers.length)
   } else {
    console.log(answers);
    // eslint-disable-next-line no-undef
    process.exit();
   }
})

process.on('exit', () => {
    console.log(`
        Bacana Clayton Roberto!
    
    - O que apredi hoje:
        ${answers[0]}
    - O que me deixou aborrecido? E o que eu poderia fazer para melhorar:
        ${answers[1]}
    - O que me deixou feliz hoje:
        ${answers[2]}
    - Você ajudou ${answers[3]} pessoas hoje:
    `)
})
// Buscando e contando dados em um Array


const booksByCategory = [
    {
        category: "Riqueza",
        Books: [
            {
                title:"Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligencia Emocional",
        Books: [
            {
                title:"Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ],
    },
]

// Total category
const totalCategory = booksByCategory.length;
console.log('Categorias: ', totalCategory);

// Total de livros por categorias
for(let category of booksByCategory) {
    //totalCategory += category.length;
    console.log('Total de livros da categoria: ', category.category);
    console.log(category.Books.length);

}

// Contagem de author
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let books of category.Books) {
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author);
            }
        }
    }
    console.log('Total de Authores: ', authors.length);
}

countAuthors();

// busca livros por author
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.Books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do Autor ${author}: ${books.join(", ")}`);
}


booksOfAuthor('George S. Clason');
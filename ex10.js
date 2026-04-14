
const readline = require('readline-sync')

let totalPaginas = 250
let paginasLidas = readline.questionInt('Quantas páginas já foram lidas?: ')
let percentual = (paginasLidas / totalPaginas) * 50

console.log('\n========== Progresso do Livro ==========' )
console.log(`Você já concluiu ${Math.round(percentual)}% do livro.`)
console.log('========================================\n')

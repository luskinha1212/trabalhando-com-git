const readline = require('readline-sync')

let nickname = readline.question("nome (nickname) do player: ")
let jogoFavorito = readline.question("jogo favorito: ")
let pontuacaoAtual = readline.question("pontuação atual: ")

console.log("\n========== Perfil do Jogador ==========\n")
console.log(`Nickname: ${nickname}`)
console.log(`Jogo favorito: ${jogoFavorito}`)
console.log(`Pontuação: ${pontuacaoAtual}`)
console.log("======================================\n")

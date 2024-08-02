import read from 'readline-sync'

var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
var qtd = read.questionInt("Digite o tamanho da sua senha: ")
var senha = ''

for (var i = 0; i < qtd; i++) {
    var tma = Math.random() * 68
    senha += char.charAt(tma)
}

console.log(`A sua senha é: ${senha}`)
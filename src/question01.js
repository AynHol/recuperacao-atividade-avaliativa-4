import read from 'readline-sync'

var nome = []
var idade = []
var idademenor = 0
var nomemenor = ""
var idademaior = 0
var nomemaior = ""

for (var i = 0; i < 5; i++) {
    nome.push(read.question("Digite o seu nome: "))
    idade.push(read.questionInt("Digite a sua idade: "))
    if (i === 0) {
        nomemenor = nome[0]
        idademenor = idade[0]
        nomemaior = nome[0]
        idademaior = idade[0]
    } if (idade[i] < idademenor) {
        nomemenor = nome[i]
        idademenor = idade[i]
    } if (idade[i] > idademaior) {
        nomemaior = nome[i]
        idademaior = idade[i]
    }
}

console.log(`A pessoa mais velha é ${nomemaior} com ${idademaior} anos`)
console.log(`A pessoa mais nova é ${nomemenor} com ${idademenor} anos`)
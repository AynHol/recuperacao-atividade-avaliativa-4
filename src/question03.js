import read from "readline-sync"

var num = []
var j = 0
var menorNum = 0
var maiorNum = 0

for (var i = 0; j !== 1; i++) {
    num.push(read.questionInt("Digite um numero inteiro: "))
    if (num[i] === 0) {
        j = 1
    }
    if (i === 0) {
        menorNum = num[i]
        maiorNum = num[i]
    } if (num[i] < menorNum && num[i] !== 0) {
        menorNum = num[i]
    } if (num[i] > maiorNum) {
        maiorNum = num[i]
    }

}

var soma = 0
for (var i = 0; i < num.length; i++) {
    soma += num[i]
}

var media = soma / (num.length - 1)

console.log(`A media é ${media}`)
console.log(`A soma total é ${soma}`)
console.log(`O menor numero é ${menorNum}`)
console.log(`O maior numero é ${maiorNum}`)
import read from 'readline-sync'

var palavra = read.question("Digite uma palavra/texto: ")
var contConsoantes = 0

for (var i = 0; i < palavra.length; i++) {
    if (
        palavra[i] === 'q' ||
        palavra[i] === 'w' ||
        palavra[i] === 'r' ||
        palavra[i] === 't' ||
        palavra[i] === 'y' ||
        palavra[i] === 'p' ||
        palavra[i] === 's' ||
        palavra[i] === 'd' ||
        palavra[i] === 'f' ||
        palavra[i] === 'g' ||
        palavra[i] === 'h' ||
        palavra[i] === 'j' ||
        palavra[i] === 'k' ||
        palavra[i] === 'l' ||
        palavra[i] === 'z' ||
        palavra[i] === 'x' ||
        palavra[i] === 'c' ||
        palavra[i] === 'v' ||
        palavra[i] === 'b' ||
        palavra[i] === 'n' ||
        palavra[i] === 'm' ||
        palavra[i] === 'ç') {
        contConsoantes++
    }
}

console.log(`A sua palavra/texto tem ${contConsoantes} consoantes`)
var copas = 0, espadas = 0, ouros = 0, paus = 0
var index = 0

while (index < 1000) {
    var sorteado = parseInt(Math.random() * 51)
    if (sorteado >= 0 && sorteado < 12){
        copas++
    } else if (sorteado > 12 && sorteado < 25){
        espadas++
    } else if (sorteado > 25 && sorteado < 38){
        ouros++
    } else{
        paus++
    }
        index++
}

var copasPorcentagem = (copas / 1000) * 100
var espadasPorcentagem = (espadas / 1000) * 100
var ourosPorcentagem = (ouros / 1000) * 100
var pausPorcentagem = (paus / 1000) * 100

console.log(`Copas = ${copas}, com % de = ${copasPorcentagem.toFixed(2)}`)
console.log(`Espadas = ${espadas}, com % de = ${espadasPorcentagem.toFixed(2)}`)
console.log(`Ouros = ${ouros}, com % de = ${ourosPorcentagem.toFixed(2)}`)
console.log(`Paus = ${paus}, com % de = ${pausPorcentagem.toFixed(2)}`)

if (espadasPorcentagem > 30 || copasPorcentagem > 30 || ourosPorcentagem > 30 || pausPorcentagem > 30) {
    console.log("O baralho pode estar viciado!!!")
} else {
    console.log("O baralho não tem chance de estar viciado!")
}
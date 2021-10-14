const frase = "Eu amo minha família"

console.log(frase)

console.log(frase.toLocaleLowerCase())

console.log(frase.toLocaleUpperCase())

const fraseSemA = frase.replaceAll("a", "i")
const fraseSemE = fraseSemA.replaceAll("e", "i")
const fraseSemO = fraseSemE.replaceAll("o", "i")
const fraseSemU = fraseSemO.replaceAll("u", "i")
console.log(fraseSemU)

console.log(frase.length)
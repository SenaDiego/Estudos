// Não podemos criar constante com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma Constante com um número
// Não podem conter espaços ou traços
// Case-sensitive - ex: nome e Nome são diferentes
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João'
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)


console.log(typeof (primeiroNumero + segundoNumero))
// typeof Verificar o tipo de uma let ou const

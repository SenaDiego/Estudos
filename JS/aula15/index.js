// IEEE 754-2008 (precisão dos número, é o que o JS segue)
let num1 = 10.654656164
let num2 = 2.5

// console.log(num1.toString() + num2) // Coloca o número como string, fazendo ele concatenar
// num1 = num1.toString() // Assim eu consigo definir a variável como string
// console.log(num1.toString(2)) // Coloca em binário 
// console.log(num1.toFixed(4)) // Define um tamanho fixo para um número muito grande ex: 10.6546
// console.log(Number.isInteger(num1)) // Verifica se a variável é um inteiro
/*
let temp = num1 * 'Ola'
console.log(Number.isNaN(temp)) // Verifica se a variável é um not a number
*/

let num3 = 0.7
let num4 = 0.1

console.log(num3 + num4) // 0.7999999999999999

num3 += num4
console.log(num3) // Não é possível corrigir essa impresisão com o .toFixed()


/* 
 Aritiméticos
 + adição / Concatenação (- / *)
 ** Potenciação
 % Resto da divisão
 Sequência de prioridade:
 ()
 **
 * / %
 + - 

 Incremente = ++
 Decremento = --

*/

const num1 = 2
const num2 = 10
const num3 = 5

console.log((num1 + num2) * num3)

let contador = 1
contador++ // melhor prática
console.log(contador++) // contador++ soma após a execução, ++contador soma um número e depois apresenta o valor
console.log(--contador) // Fazer a conta pedindo para mostrar na tela não é uma boa prática

// NaN - Not a number
const num1 = 10
const num2 = parseInt('5.2') // parseInt define o numero para inteiro
// parseFloat é para decimal
// Ou declarar como Number no lugar do parseInt e ele vai definir automáticamente o tipo
console.log(num1 + num2)
console.log(typeof num2)


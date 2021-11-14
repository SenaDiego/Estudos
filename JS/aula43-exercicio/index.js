// Escreva uma função que recebe um número e retorne o segunte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número Não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = retorna o valor recebido
// Use a função com números de 0 a 100
/* 
function fizzBuzz(numero) {
    if (Number.isInteger(numero)) {
        if (numero % 3 == 0 && numero % 5 == 0) {
            return `O número é: ${numero} - Resultado: FizzBuzz`;
        } else if (numero % 3 == 0) {
            return `O número é ${numero} - Resultado: Fizz`;
        } else if (numero % 5 == 0) {
            return `O número é ${numero} - Resultado: Buzz`;
        }
    } else {
        return `Você não inseriu um número`;
    }
}
 */

function fizzBuzz() {
    let acrescenta = 0;
    while (acrescenta <= 100) {
        if (Number.isInteger(acrescenta)) {
            if (acrescenta % 3 == 0 && acrescenta % 5 == 0) {
                console.log(`O número é: ${acrescenta} - Resultado: FizzBuzz`);
                acrescenta++
            } else if (acrescenta % 3 == 0) {
                console.log(`O número é ${acrescenta} - Resultado: Fizz`);
                acrescenta++
            } else if (acrescenta % 5 == 0) {
                console.log(`O número é ${acrescenta} - Resultado: Buzz`);
                acrescenta++
            } else {
                console.log(acrescenta)
                acrescenta++
            }
        } else {
            return `Você não inseriu um número`;
        }
    }

}
console.log(fizzBuzz());

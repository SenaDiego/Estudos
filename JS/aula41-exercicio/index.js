// escreva uma função que recebe 2 números e retorne o maior deles

const numeroUm = 20000
const numeroDois = 5000

function retornaMaior (primeiroNumero, segundoNumero) {
    // primeira forma
/*     
    if (primeiroNumero > segundoNumero) { return primeiroNumero };
    return segundoNumero;
*/

    // segunda forma
/*     
    const maior = Math.max(primeiroNumero, segundoNumero);
    return maior;
*/
    // terceira forma -- correção

    return primeiroNumero > segundoNumero? primeiroNumero : segundoNumero;

}

console.log(retornaMaior(numeroDois, numeroUm))


// quarta forma -- correção

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5)) 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// continue continua para a próxima iteração
// break sai do laço

for (let numero of numeros) {

    if (numero === 3 || numero === 5) {
        continue // pula o 3 e continua o código, não roda o true
    }

    if (numero === 7) {
        break
    }
    console.log(numero)
}
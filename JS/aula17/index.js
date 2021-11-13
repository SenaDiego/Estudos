function saudacao(nome) {
    return `Bom dia ${nome}!!`
}

// const variavel = saudacao('Diego')
// console.log(variavel)

function soma (x = 1, y = 1) {
    const resultado = x + y
    return resultado
}

console.log(soma())
soma(2, 2)




const raiz = function(n) { // Função anônima
    return n ** 0.5
}

console.log(raiz(16))

// arrow function
const raiz2 = (n) => {
    return n ** 0.5
}
console.log(raiz2(25))

// é possível simplificar a função acima, ficando
const raiz3 = n => n ** 0.5

console.log(raiz3(64))


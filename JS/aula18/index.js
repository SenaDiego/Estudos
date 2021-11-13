const pessoa = {
    nome: 'Diego',
    sobrenome: 'Ribeiro',
    idade: 21
}

console.log(pessoa.nome)


function criaPessoa (nome, sobrenome, idade) {
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        //idade: idade
        nome, sobrenome, idade // Também funciona, caso tenha o mesmo nome como acima
    }
}

const pessoa1 = criaPessoa('Diego', 'Ribeiro', 21)
console.log(pessoa1)


const pessoa2 = {
    nome: 'Diego',
    Sobrenome: 'Ribeiro',
    idade: 21,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
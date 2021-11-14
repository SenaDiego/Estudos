// For in -> lê os índices ou chaves do objeto

const frutas = ['Pêra', 'Macã', 'Uva'];

for (let fruta in frutas) { 
    console.log(fruta)
}


const pessoa = {
    nome: 'Diego',
    sobrenome: 'Ribeiro',
    idade: 21
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


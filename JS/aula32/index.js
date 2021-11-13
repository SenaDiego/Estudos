const pessoa = {
    nome: 'Diego',
    sobrenome: 'Ribeiro',
    idade: 21,
    endereco: {
        rua: 'Osório da Rocha Diniz',
        numero: 24
    }
};

// atribuição via desestruturação
const { nome, sobrenome, endereco: {rua: r, numero}, endereco } = pessoa;
console.log(nome, sobrenome);
console.log(r, numero, endereco);

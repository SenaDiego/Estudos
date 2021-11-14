
const nome = 'Diego Ribeiro';
const nome2 = ['Diego', 'Ribeiro', 'Sena'];

/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

for (let i in nome) { // For in
    console.log(nome[i]);
} */

for (let valor of nome) {
    console.log(valor);
}

for (let valor of nome2) { // Não retorna o índice, somente o valor
    console.log(valor);
}


console.log('####')

nome2.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
});



const pessoa = {
    nome: 'Diego',
    sobrenome: 'Ribeiro'
};

for (let i in pessoa) {
    console.log(i, pessoa[i])
}
/* 
for (let valor of pessoa) {
    // Vai dar erro por não ser iteravel
}
 */

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
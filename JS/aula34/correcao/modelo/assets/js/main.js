const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// apendiChild adiciona no final do elemento

// Modo 1
/* 
const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerHTML = texto
    div.append(tagCriada)
}

container.appendChild(div)
 */
// modo 2 - mais seguro (só altera o innerHTML para innerText)

/* const container = document.querySelector('.container');

const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto
    div.append(tagCriada)
}

container.appendChild(div)
 */


// modo 3

const container = document.querySelector('.container');

const div = document.createElement('div'); // cria um elemento (aqui ela não é pai nem filha de ninguem)

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto) // Criando um nó de texto
    tagCriada.appendChild(textoCriado) // adiciona um filho a algo
    div.append(tagCriada)
}

container.appendChild(div)
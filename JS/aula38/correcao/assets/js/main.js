// querySelector só seleciona o primeiro do arquivo HTML
const paragrafo = document.querySelector('.paragrafos');
const ps = paragrafo.querySelectorAll('p') // Não é um array do JS mas se comporta de forma similar

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of ps) {
    // Não existo o background-color em JS, somente CSS
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFF';
}

// pegar a cor do background e colocar o fundo no parágrafo e a cor da letra em branco
function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = []

    /*
    form.onsubmit = function (evento) { // não deixa a página atualizar quando envia o formulário
        evento.preventDefault()
    }
    */

    function recebeEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        })
        console.log(nome.value, sobrenome.value, peso.value, altura.value)  
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }


    
    form.addEventListener('submit', recebeEventoForm)
    console.log(pessoas)
    criaPessoa(recebeEventoForm)
}

meuEscopo()
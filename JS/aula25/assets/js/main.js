function calculaIMC() {
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#resultado')

    function recebeEventoForm(evento) {
        evento.preventDefault()
        const recebePeso = form.querySelector('#peso')
        const recebeAltura = form.querySelector('#altura')

        let peso = Number(recebePeso.value)
        let altura = Number(recebeAltura.value)

        if (Number.isInteger(altura) == true) {
            altura = altura / 100
        }

        const calculo = peso / (altura * altura)

        if (calculo > 0 && calculo < 18.5) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Abaixo do peso)</p>`
        } else if (calculo > 18.5 && calculo <= 25) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Peso normal)</p>`
        } else if (calculo >= 25 && calculo <= 29.9) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Sobrepeso)</p>`
        } else if (calculo >= 30 && calculo <= 34.9) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Obesidade grau 1)</p>`
        } else if (calculo >= 35 && calculo <= 39.9) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Obesidade grau 2)</p>`
        } else if (calculo > 40 && calculo <= 300) {
            resultado.innerHTML = `<p class="verde">Seu IMC é ${calculo.toFixed(1)} (Obesidade grau 3)</p>`
        } else {
            resultado.innerHTML = `<p class="vermelho">Valor Inválido</p>`
        }
    }

    form.addEventListener('submit', recebeEventoForm)
}

calculaIMC()

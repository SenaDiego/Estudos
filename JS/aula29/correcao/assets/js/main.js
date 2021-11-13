/////////////// Forma 1
/*
const h1 = document.querySelector('.container h1')
const data = new Date()

function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = 'Valor inválido'
    }
}

function getNomeMes(numeroMes) {
    switch (numeroMes) {
        case 0:
            mesTexto = 'Janeiro'
            return mesTexto
        case 1:
            mesTexto = 'Fevereiro'
            return mesTexto
        case 2:
            mesTexto = 'Março'
            return mesTexto
        case 3:
            mesTexto = 'Abril'
            return mesTexto
        case 4:
            mesTexto = 'Maio'
            return mesTexto
        case 5:
            mesTexto = 'Junho'
            return mesTexto
        case 6:
            mesTexto = 'Julho'
            return mesTexto
        case 7:
            mesTexto = 'Agosto'
            return mesTexto
        case 8:
            mesTexto = 'Setembro'
            return mesTexto
        case 9:
            mesTexto = 'Outubro'
            return mesTexto
        case 10:
            mesTexto = 'Novembro'
            return mesTexto
        case 11:
            mesTexto = 'Dezembro'
            return mesTexto
        default:
            mesTexto = 'Valor inválido'
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )

}
h1.innerHTML = criaData(data)

 */



/////////////// Forma 2 ----- Forma que o JavaScript passa na documentação
/*
const h1 = document.querySelector('.container h1')
const data = new Date()
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'})
 */

/////////////// Forma 3 --- um pouco melhor que a 1

const h1 = document.querySelector('.container h1')
const data = new Date()

function getDiaSemanaTexto(numeroDiaSemana) {
    diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sábado']
    return diaSemana[numeroDiaSemana]
}

function getNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes]
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()} ` +
        `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )

}
h1.innerHTML = criaData(data)



// o new é pq eu estou falando com uma função construtora e a primeira letra do nome da função é maiúscula
/* 
const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras - umDia ) // 01/01/1970 Timestamp unix ou época unix
 */
// LINK: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


/* const data = new Date(2019, 3, 20, 15, 14, 27) */ // Sat Apr 20 2019 15:14:27 GMT-0300 (Horário Padrão de Brasília)
// mes em JS começa no 0 e termina no 11
// para enviar os dados no Date utiliza, a, m, d, h, M, s, ms

// outra forma
const data = new Date('2019-04-20 20:20:59') // mais utilizado
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado

console.log(data.toString())


console.log(Date.now()) // Do marco zero (explicado acima) até hoje em ms

function zeroAEsquerda(num) {
return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    // console.log(data)
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data0 = new Date()
const dataBrasil = formataData(data0)
console.log(dataBrasil)
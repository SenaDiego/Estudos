// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000  ? 'Usuário Vip' : 'Usuário normal' // basicamente resumindo o if abaixo
console.log(nivelUsuario)
/* 
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}
 */

const corUsuario = null
const corPadrao = corUsuario || 'Verde' // Caso não tenha a do usuário vem a cor padrão

console.log(nivelUsuario, corPadrao)

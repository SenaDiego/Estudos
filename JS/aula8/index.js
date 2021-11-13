/*
nome
sobrenome
idade
peso
altura

*/

const nome = 'Diego Ribeiro'
const sobrenome = 'Sena'
const idade = 21
const peso = 120
const alturaEmCm = 171
let imc // peso / (altura * altura)
let anoNascimento

imc = peso / (alturaEmCm * alturaEmCm)
anoNascimento = 2021 - idade


console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg')
// template strings
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)


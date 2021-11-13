const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos[2])
alunos[0] = 'Eduardo'
console.log(alunos)
// alunos[3] = 'Luiza'
// console.log(alunos)
console.log(alunos.length)
// alunos[alunos.length] = 'Luiza' // é um exemplo mas não é muito bom utilizar
alunos.push('Luiza', 'Fábio') // Adiciona informação ao array
console.log(alunos)
alunos.unshift('Amanda') // Adiciona no inicio do array
console.log(alunos)

alunos.pop() // Retira o último dado do array
console.log(alunos)
alunos.shift() // Retira o primeiro dado do array
console.log(alunos)

delete alunos[1] // Deleta o dado e não coloca nada no lugar dele
console.log(alunos)

console.log(alunos.slice(0, 3)) // Pega uma quantidade específica no array


console.log(typeof alunos) // Array é um objeto
console.log(alunos instanceof Array)
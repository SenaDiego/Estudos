/* let controle = 0;

while (controle <= 10) {
    console.log(controle);
    controle++;
}

 */


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50 
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('####')

do { // roda uma vez antes de chegar, nesse caso ele roda o random e verifica se é 10, se não ele roda novamente
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)
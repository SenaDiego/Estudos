// Escreva uma função chamada ePaisagem que recebe dois
// argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

// o que eu fiz
/* 
function ePaisagem (h, l) {
    if (l > h) {
        let paisagem = true;
        return paisagem;
    } else {
        paisagem = false;
        return paisagem;
    }
}
 */
// correção
/* 
function ePaisagem (largura, altura) {
    return largura > altura;
}
 */


// arow function 
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1920, 1080))
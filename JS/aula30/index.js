
const verdadeira = true;
/* 
// let tem escopo de bloco { ...bloco }
// var só tem escopo de função

let nome = 'Diego'; // criando
var nome2 = 'Diego';



if (verdadeira) {
    let nome = 'Ribeiro';
    // console.log(nome, nome2)
    var nome2 = 'Ribeiro'; // 

    
    if (verdadeira) {
        let nome = 'outra coisa'; // redeclarada
        var nome2 = 'Ronaldo';
        //console.log(nome, nome2); // let "se altera" em cada um bloco - mas é somente daquele bloco
    }
}


console.log(nome, nome2);
 */
/* 
var sobrenome = 'Ribeiro'

function falaOi () {
    var nome = 'Diego';
    console.log(sobrenome); // Pega a variável de fora

    if (verdadeira) {
        console.log(sobrenome);
        let nomeIf = 'Diego';
    }

    // console.log(nomeIf) // Não pega por estar dentro de um bloco
}


// console.log(nome) // Não pega a variável por estar dentro da função
falaOi();
 */


//

console.log(sobrenome)

// var sobrenome = 'Ribeiro'; // Hoisting - o JS eleva a variável para o topo do arquivo (somente var)
// let sobrenome = 'Ribeiro';
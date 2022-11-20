//const funcoes = require('./funcoes-auxiliares');

// console.log(funcoes);
// console.log(funcoes.gets());
//const {gets, print} = require('./funcoes-auxiliares');
const {gets, print} = require('./ex_01');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print('Maior Valor: '+ maiorValorEncontrado);
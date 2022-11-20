/* Receba 5 nº sorteados para alunos e mostre o maior deles;
   
   Dados de Entrada:
   5
   50
   10
   98
   23

   Saída: 98
*/

const entradas = [5, 50, 10, 98, 23,900];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };
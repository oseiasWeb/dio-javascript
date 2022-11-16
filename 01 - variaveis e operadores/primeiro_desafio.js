/*
    Faça um programa para calcular o valor uma viagem.
    
    Você terá 3 variáveis. Sendo elas:
        1 - Preço do combustível; 
        2 - Valor médio gasto por KM pelo carro;
        3 - Distância em KM da viagem;
    
    Imprima no console o valor que será gasto para realizar esta viagem.
*/
const preco_gaso = 4.50;
const media_carro_litro = 11;
const dist_viagem = 250;

const consumo_litro = dist_viagem / media_carro_litro;
const valor_viagem = consumo_litro * preco_gaso

console.log('R$ '+ valor_viagem.toFixed(2));
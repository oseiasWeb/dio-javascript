/* Exercício de classes - Carro com marca, cor e média de combustível */

class Carro {
    marca;
    cor;
    mediaCombustivel;

    constructor(marca, cor, mediaCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.mediaCombustivel = mediaCombustivel;
    }

    calcularValorDaViagem(distanciaViagem, precoCombustivel){
        return (distanciaViagem * this.mediaCombustivel) * precoCombustivel;
    }
}

const livina = new Carro('nissan','prata',1/11);
console.log('Valor gasto: R$'+livina.calcularValorDaViagem(250,4.79).toFixed(2));

const mustang = new Carro('ford','preto',1/5);
console.log('Valor gasto: R$'+mustang.calcularValorDaViagem(250,4.79).toFixed(2));
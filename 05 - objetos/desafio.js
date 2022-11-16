// Crie uma classe para representar pessoas

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc;

        if(imc <= 18){
            return 'Abaixo do peso';
        }else if(imc > 18 && imc < 30){
            return 'Peso ideal';
        } else{
            return 'Acima do peso';
        }
    }
}

const jose = new Pessoas('José',70,1.75);
console.log(jose);
console.log('O valor do meu IMC é: '+ jose.calcularImc().toFixed(2));

const maria = new Pessoas('Maria',90,1.65);
console.log(maria);
console.log('O valor do meu IMC é: '+ maria.calcularImc().toFixed(2));
console.log(maria.classificarImc());

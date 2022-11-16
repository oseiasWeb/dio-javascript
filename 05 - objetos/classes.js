
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const oseias = new Pessoa('Oséias Nogueira',29);

const nara = new Pessoa('Nara Maciel',27);

console.log(oseias);
console.log(nara);

oseias.descrever();

console.log(oseias);

// Função que compara idade de pessoas
function compararPessoas(p1,p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const zeca = new Pessoa('Oseias',29);
const miqueias = new Pessoa('Miqueias',31);

compararPessoas(zeca,miqueias);
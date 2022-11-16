// Representação de Objetos

const oseias = {
    nome: 'Oséias N Maciel',
    idade: 29,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

// oseias.altura = 1.70;

// delete oseias.altura;

// console.log(oseias.nome);
// console.log(oseias.idade);
// console.log(oseias);
// oseias.descrever();

//** Podemos acessar e alterar as informações do Objeto **
oseias.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}
oseias.descrever();

// **Pode acessar as informações do objeto diretamente 
console.log(oseias['idade']);

//Exemplo de lista
const alunos = ['Oseias','Nara','Catarina'];
console.log(alunos);

//Incluir um novo aluno
alunos.push('Rebeca');
console.log(alunos);

//Escolhendo a posição de inclusão
alunos[4] = 'Miqueias';
console.log(alunos);

//Retirar o último nome da lista e mostrar
console.log(alunos.pop());

//Retirar o primeiro nome da lista e mostrar
console.log(alunos.shift());

//Para saber o tamanho da lista
console.log('o tamanho da lista: '+alunos.length);

//Percorrendo listas
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Ordenar letras do nome em uma lista
const nome = 'Oseias Nogueira'
for(let i = 0; i < nome.length; i++){
    const letra = nome[i];
    console.log(letra);
}


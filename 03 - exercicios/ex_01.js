/*
    1 - Faça um algoritmo que leia as 3 notas tiradas por um aluno em semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo: 

    Média = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 3; 
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('Média: '+media);
    console.log('Reprovado');
} else if(media >= 5 && media <= 7){
    console.log('Média: '+media);
    console.log('Recuperação');
}else {
    console.log('Média: '+media);
    console.log('Aprovado');
}
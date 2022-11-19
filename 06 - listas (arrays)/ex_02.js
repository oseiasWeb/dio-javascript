// Programa capaz de percorrer uma lista de números e imprimir os pares

const numeros =[1,2,3,4,5,6,7,8,9,10];

function descobriNumPar(numeros){
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
    
        if(numero % 2 == 0){
            console.log(numero);
        }
    }
    
}

descobriNumPar(numeros);
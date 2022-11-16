function teste (){
    console.log('Teste executado');
}

function seuNome(nome){
    console.log('Seu nome é ' +nome);
}

function quadrado(valor){
    return valor * valor;
}

function incluirJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

function main(){
    teste();
    seuNome('Nabucodonozor');
    console.log(quadrado(10));
    console.log(incluirJuros(50,10));
}

main();
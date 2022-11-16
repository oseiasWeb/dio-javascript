/* IMC - Indice de Massa Corporal com funções*/

function calcularImc(peso, altura){
    return valorImc = peso / (altura * altura);
    // Math.pow(altura,2);
}

function classificaImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc > 18.5 && imc < 25){
        return 'Peso normal';
    }else if(imc > 25 && imc < 30){
        return 'Acima do peso';
    }else if(imc > 30 && imc < 40){
        return 'Obeso';
    } else {
        return 'Obesidade Grave, tu vai morrer!';
    }    
}

// Será nosso Main
(function(){
    const peso = 200;
    const altura = 1.69;

    const imc = calcularImc(peso, altura);
    console.log(imc.toFixed(2));
    console.log(classificaImc(imc));
})();
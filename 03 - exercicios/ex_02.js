/* IMC - Indice de Massa Corporal */
const peso = 150;
const altura = 1.90;

const imc = peso / (altura * altura);
Math.pow(altura,2);

if(imc < 18.5){
    console.log("Abaixo do peso - IMC: "+imc.toFixed(2));
}else if(imc > 18.5 && imc < 25){
    console.log("Peso normal - IMC: "+imc.toFixed(2));
}else if(imc > 25 && imc < 30){
    console.log("Acima do peso - IMC: "+imc.toFixed(2));
}else if(imc > 30 && imc < 40){
    console.log("Obeso - IMC: "+imc.toFixed(2));
} else {
    console.log("Obesidade Grave, se vai morrer - IMC: "+imc.toFixed(2));
}

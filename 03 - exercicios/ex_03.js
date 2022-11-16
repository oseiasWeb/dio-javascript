/* Valor final de uma compra por PIX, Débito e Crédito com/sem descontos*/

const precoEtiqueta = 150.00;
const pagamentoDebito = precoEtiqueta;
const pagamentoPixDinheiro = precoEtiqueta;
const pagamentoCartaoDuas = precoEtiqueta;
const pagamentoCartaoAcimaDeDuas = precoEtiqueta;
const dezPorCento = precoEtiqueta * (10/100); 
const formaPagamento = '';

if(formaPagamento === 'Debito'){
    const total = pagamentoDebito - dezPorCento;
    console.log('Valor do produto (Débito) R$'+total);

}else if(formaPagamento === 'Pix' || formaPagamento === 'Dinheiro'){
    const total = pagamentoPixDinheiro - (pagamentoPixDinheiro * (15/100));
    console.log('Valor do produto (Pix/Din) R$'+total);

}else if(formaPagamento === 'Credito2x'){
    const total = pagamentoCartaoDuas / 2;
    console.log('Valor do produto (Crédito) 2x - R$'+total);

}else {
    const total = pagamentoCartaoAcimaDeDuas + dezPorCento;
    console.log('Valor do produto acima de 2x (Crédito) - R$'+total);
}
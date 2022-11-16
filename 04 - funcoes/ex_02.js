// Preço do produto + desconto/acrescimo - Função 

function tipoPagamento(formaPagamento,valorProduto){
    const precoEtiqueta = valorProduto;
    const pagamentoDebito = precoEtiqueta;
    const pagamentoPixDinheiro = precoEtiqueta;
    const pagamentoCartaoDuas = precoEtiqueta;
    const pagamentoCartaoAcimaDeDuas = precoEtiqueta;
    const dezPorCento = precoEtiqueta * (10/100); 

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
}

(function(){
    
    tipoPagamento('Credito2x',100);
    
})();

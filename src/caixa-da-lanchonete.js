class CaixaDaLanchonete {


    calcularValorDaCompra(metodoDePagamento, itens) {
         const cardapio = [
                ["cafe", "Café", 3.00],
                ["chantily", "Chantily", 1.50],
                ["suco", "Suco Natural", 6.20],
                ["sanduiche", "Sanduíche", 6.50],
                ["queijo", "Queijo", 2.00],
                ["salgado", "Salgado", 7.25],
                ["combo1", "1 Suco e 1 Sanduíche", 9.50],
                ["combo2", "1 Café e 1 Saduíche", 7.50]
            ];

         var valorPagamento = 0;

        if (itens.length !== 0){
            for (const item of itens) {

                 var pedido = item.split(',');
                 var codigo = pedido[0];
                 var quantidade = pedido[1];

                 if (cardapio.some(item => item[0] === codigo)){

                    if(codigo == "chantily" && !itens.some(item => item.includes("cafe"))){

                            return "Item extra não pode ser pedido sem o principal";

                        }
                    if(codigo == "queijo" && !itens.some(item => item.includes("sanduiche"))){

                            return "Item extra não pode ser pedido sem o principal";

                        }


                    var itemDoCardapio = cardapio.find(item => item[0] === codigo);
                    var valorDoItem = itemDoCardapio[2];
                    if (quantidade != 0){
                        valorPagamento += valorDoItem*quantidade;

                    }else{

                        return "Quantidade inválida!";

                    }
                 }else{

                    return "Item inválido!";

                 }
            }

            if (metodoDePagamento == "debito"){

                return "R$ " + ((valorPagamento).toFixed(2)).replace('.', ',');

            }else if (metodoDePagamento == "credito"){

                var acrescimo = valorPagamento*0.03
                return "R$ " + ((valorPagamento + acrescimo).toFixed(2)).replace('.', ',');

            }else if(metodoDePagamento == "dinheiro"){

                var desconto = valorPagamento*0.05;
                return "R$ " + ((valorPagamento - desconto).toFixed(2)).replace('.', ',');

            }else{

                return "Forma de pagamento inválida!";

            }
        } else {

            return "Não há itens no carrinho de compra!";

        }
    }

}

export { CaixaDaLanchonete };

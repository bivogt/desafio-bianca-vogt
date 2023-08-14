import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const meuTesteUm = new CaixaDaLanchonete().calcularValorDaCompra("debito", ["chantily,1"]);

console.log(meuTesteUm); // "Item extra não pode ser pedido sem o principal"

const meuTesteDois = new CaixaDaLanchonete().calcularValorDaCompra("debito", ["cafe,1","chantily,1"]);

console.log(meuTesteDois); //R$ 4,50 resultado esperado

const meuTesteTres = new CaixaDaLanchonete().calcularValorDaCompra("credito", ["combo1,1","cafe,2"]);

console.log(meuTesteTres); //R$ 15,96 resultado esperado

const meuTesteQuatro = new CaixaDaLanchonete().calcularValorDaCompra("debito", ["combo1,1","combo2,1","salgado,2","suco,1","cafe,1"]);

console.log(meuTesteQuatro); //R$ 40,70 resultado esperado
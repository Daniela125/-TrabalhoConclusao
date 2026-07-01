//Crie uma classe que possua dois métodos: um para realizar pagamento e outro para consultar o último pagamento.
//Pagamentos serão armazenados como objetos Javascript dentro de uma lista de pagamentos.
//Cada pagamento terá as propriedades: Código de Barras, Empresa e Valor. Quando um pagamento for realizado e o valor for maior que 100.00,
//o pagamento também terá a propriedade 'categoria' preenchida pela função como 'cara',
//caso contrário, a propriedade 'categoria' será preenchida pela função como 'padrão'.
// O método de consultar trará apenas o último pagamento.
//
//  ex.
//  const servicoDePagamento = new ServicoDePagamento();
//  servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
//  console.log(servicoDePagamento.consultarUltimoPagamento());
//
//
//  {
//     codigoBarras: '0987-7656-3475',
//     empresa: 'Samar',
//     valor: 56.87,
//     categoria: 'cara'
//  }
//

export class ServicoDePagamento {
  pagar(CodigoBarras, Empresa, Valor) {
    var categoria = "padrão";

    if (Valor > 100) {
      categoria = "cara";
    }
    var pagamento = {
      codigoBarras: CodigoBarras,
      Empresa: Empresa,
      Valor: Valor,
      categoria: categoria,
    };
    this.listaPagamentos.push(pagamento);
  }

  constructor() {
    this.listaPagamentos = [];
  }
  consultarUltimoPagamento() {
    var ultimopagamento = this.listaPagamentos[this.listaPagamentos.length - 1];
    return ultimopagamento;
  }
}

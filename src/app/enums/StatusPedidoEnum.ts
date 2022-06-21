export enum StatusPedido {
  REALIZADO = 'Pedido Recebido',
  PROCESSANDO_PAGAMENTO = 'Processando Pagamento',
  PAGAMENTO_CONFIRMADO = 'Pagamento Confirmado',
  PAGAMENTO_NAO_REALIZADO = 'Pagamento não Identificado',
  PAGAMENTO_NEGADO = 'Pagamento Negado',
  EMITINDO_NOTA = 'Nota Fiscal Emitida',
  PREPARANDO_ENVIO = 'Pedido em separação no estoque',
  ENVIADO = 'Pedido Enviado à Transportadora',
  ENTREGUE = 'Pedido Entregue',
  CANCELADO = 'Solicitação de Cancelamento Recebida',
  TROCA_DEVOLUÇÃO = 'Solicitação de Troca/Devolução Recebida',
  EM_DEVOLUÇÃO = 'Pedido em Rota de Devolução',
  DEVOLVIDO = 'Pedido Recebido na Central de Distribuição',
  ESTORNO_LIBERADO = 'Estorno do Valor do Pedido Liberado',
  CRÉDITOS_LIBERADOS = 'Crédito Liberado',
}

function isActive(status: StatusPedido): boolean {
  const activeOrderStatus = [
    StatusPedido.REALIZADO,
    StatusPedido.PROCESSANDO_PAGAMENTO,
    StatusPedido.PAGAMENTO_CONFIRMADO,
    StatusPedido.EMITINDO_NOTA,
    StatusPedido.PREPARANDO_ENVIO,
    StatusPedido.ENVIADO,
    StatusPedido.ENTREGUE,
  ];

  return activeOrderStatus.includes(status);
}

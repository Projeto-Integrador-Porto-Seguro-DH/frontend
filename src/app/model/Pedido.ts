import { FormasDePagamentoEnum } from './../enums/PagamentoEnum';
import { StatusPedido } from './../enums/StatusPedidoEnum';
import { DetalhePedido } from './DetalhePedido';
import { Usuario } from './Usuario';
export class Pedido {
  idPedido: number;
  dataPedido?: string;
  statusPedido?: StatusPedido;
  formaDePagamento?: FormasDePagamentoEnum;
  codigoEnvio?: string;
  dataEnvio?: string;
  valorEnvio?: number;
  valorTotalPedido?: number;
  usuario?: Usuario;
  detalhePedido?: DetalhePedido[];
}

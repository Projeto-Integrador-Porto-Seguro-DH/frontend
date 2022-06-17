import { StatusPedido } from './../enums/StatusPedidoEnum';
import { DetalhePedido } from './DetalhePedido';
import { Usuario } from './Usuario';
export interface Pedido {
  idPedido: number;
  dataPedido: string;
  statusPedido: StatusPedido; // Verificar tipo
  // String mensagemDeStatusPedido;
  codigoEnvio: string;
  dataEnvio: string;
  valorEnvio: number;
  valorTotalPedido: number;
  usuario?: Usuario;
  detalhePedido?: DetalhePedido[];
}

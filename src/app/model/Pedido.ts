import { DetalhePedido } from './DetalhePedido';
import { Usuario } from './Usuario';
export class Pedido {
    public idPedido:number
    public dataPedido:Date
    public statusPedido:string // Verificar tipo
    // String mensagemDeStatusPedido;
    public codigoEnvio:string
    public dataEnvio:Date
    public valorEnvio:number
    public valorTotalPedido: number
    public usuario: Usuario
    public detalhePedido:DetalhePedido[]
}
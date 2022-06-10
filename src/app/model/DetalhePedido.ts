import { Pedido } from './Pedido';
import { Produto } from './Produto';

export class DetalhePedido {
    public idDetalhePedido:number
    public quantidadeProduto:number
    public subtotal:number
    public pedido: Pedido
    public produto: Produto
}
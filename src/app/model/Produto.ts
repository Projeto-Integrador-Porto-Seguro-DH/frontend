import { Categoria } from './Categoria';
import { DetalhePedido } from './DetalhePedido';
export class Produto {
  public idProduto: number;
  public nomeProduto?: string;
  public descricaoProduto?: string;
  public precoUnitarioProduto?: number;
  public estoqueProduto?: number;
  public produtoDisponivel?: boolean;
  public detalhePedido?: DetalhePedido[];
  public categoria?: Categoria;
  public foto?: string;
}

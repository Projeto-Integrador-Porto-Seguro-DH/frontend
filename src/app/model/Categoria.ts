import { Produto } from "./Produto"

export class Categoria {
    public idCategoria: number
    public nomeCategoria: string
    public descricaoCategoria: string
    public produto: Produto[]
}
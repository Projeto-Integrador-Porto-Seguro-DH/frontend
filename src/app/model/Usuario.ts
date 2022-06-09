import { Pedido } from './Pedido';
export class Usuario {
    public idUsuario:number
    public nomeUsuario:string
    public sobrenomeUsuario: string
    // private String nomeCompleto;
    public emailUsuario:string
    public senhaUsuario:string
    public dataDeNascimento:Date
    public cpfUsuario:string
    public telefoneUsuario:number
    public compartilharDadosUsuario:boolean
    public logradouroEndereco:string
    public cepEndereco:number
    public numeroEndereco:number
    public bairroEndereco:string
    public complementoEndereco:string
    public cidadeEndereco:string
    public estadoEndereco:string // Verificar tipo
    public formasDePagamento:string // Verificar tipo
    public pedido:Pedido[]

}
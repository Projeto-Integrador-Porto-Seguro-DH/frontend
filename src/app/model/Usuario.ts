import { Pedido } from './Pedido';
export class Usuario {
  public idUsuario?: number;
  public nomeUsuario?: string;
  public sobrenomeUsuario?: string;
  public emailUsuario: string;
  public senhaUsuario?: string;
  public confirmacaoSenha?: string;
  public dataDeNascimento?: string;
  public cpfUsuario?: string;
  public telefoneUsuario?: number;
  public compartilharDadosUsuario?: boolean;
  public admin?: boolean;

  public pedidoUsuario?: Pedido[];

  // ENDEREÇO
  public logradouroEndereco?: string;
  public cepEndereco?: number;
  public numeroEndereco?: number;
  public bairroEndereco?: string;
  public complementoEndereco?: string;
  public cidadeEndereco?: string;
  public estadoEndereco?: string;
}

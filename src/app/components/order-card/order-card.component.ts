import { Component, OnInit } from '@angular/core';
import { FormaDePagamento } from 'src/app/enums/PagamentoEnum';
import { StatusPedido } from 'src/app/enums/StatusPedidoEnum';
import { DetalhePedido } from 'src/app/model/DetalhePedido';
import { Pedido } from 'src/app/model/Pedido';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  public pedido: Pedido;

  detalhe1: DetalhePedido = {
    idDetalhePedido: 1,
    quantidadeProduto: 1,
    subtotal: 128.9,
    pedido: { idPedido: 1 },
    produto: {
      idProduto: 1,
      nomeProduto: 'Vinho',
      precoUnitarioProduto: 128.9,
    },
  };

  detalhe2: DetalhePedido = {
    idDetalhePedido: 2,
    quantidadeProduto: 2,
    subtotal: 160,
    pedido: { idPedido: 1 },
    produto: {
      idProduto: 2,
      nomeProduto: 'Queijo',
      precoUnitarioProduto: 80,
    },
  };

  detalhe3: DetalhePedido = {
    idDetalhePedido: 3,
    quantidadeProduto: 1,
    subtotal: 50,
    pedido: { idPedido: 1 },
    produto: {
      idProduto: 3,
      nomeProduto: 'Geléia',
      precoUnitarioProduto: 50,
      fotoProduto: '../../../assets/img/products/queijo/queijo1.jpg',
    },
  };

  usuario: Usuario = {
    idUsuario: 1,
    nomeUsuario: 'João',
    sobrenomeUsuario: 'Silva',
    emailUsuario: 'joao.silva@gmail.com',
    senhaUsuario: 'Senhateste123',
    dataDeNascimento: '2000-04-25',
    cpfUsuario: '123.456.789-00',
    telefoneUsuario: 11981053464,
    compartilharDadosUsuario: true,
    logradouroEndereco: 'Rua Teste',
    cepEndereco: 12345678,
    numeroEndereco: 123,
    bairroEndereco: 'Bairro dos Testes',
    complementoEndereco: 'Casa',
    cidadeEndereco: 'São Paulo',
    estadoEndereco: 'SP',
    formasDePagamento: 'Cartão de Crédito',
    pedido: [],
  };

  constructor() {}

  ngOnInit(): void {
    this.pedido = {
      idPedido: 1,
      dataPedido: '2022-06-17T17:08:43Z',
      statusPedido: StatusPedido.PROCESSANDO_PAGAMENTO,
      codigoEnvio: 'BR123456789BR',
      dataEnvio: '',
      valorEnvio: 12.9,
      valorTotalPedido: 351.8,
      detalhePedido: [this.detalhe1!, this.detalhe2!, this.detalhe3!],
      usuario: this.usuario,
      formaDePagamento: FormaDePagamento.CARTAO,
    };
  }
}

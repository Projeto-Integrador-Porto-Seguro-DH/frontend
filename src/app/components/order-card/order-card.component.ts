import { Component, OnInit } from '@angular/core';
import { StatusPedido } from 'src/app/enums/StatusPedidoEnum';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  pedido: Pedido;

  constructor() {}

  ngOnInit(): void {
    this.pedido = {
      idPedido: 1,
      dataPedido: '2022-06-17T17:08:43Z',
      statusPedido: StatusPedido.REALIZADO,
      codigoEnvio: 'BR123456789BR',
      dataEnvio: '',
      valorEnvio: 12.9,
      valorTotalPedido: 271.8,
    };
  }
}

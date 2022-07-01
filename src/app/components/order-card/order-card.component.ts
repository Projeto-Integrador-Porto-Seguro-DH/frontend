import { Component, Input, OnInit } from '@angular/core';
import { DetalhePedido } from 'src/app/model/DetalhePedido';
import { Pedido } from 'src/app/model/Pedido';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css'],
})
export class OrderCardComponent implements OnInit {
  @Input()
  usuarioOrderCard: Usuario;

  @Input()
  pedidoOrderCard: Pedido = new Pedido();

  dataDoPedido = '';

  constructor() {}

  ngOnInit(): void {
    this.dataDoPedido = `${this.pedidoOrderCard.dataPedido?.replace(
      '@',
      'T'
    )}Z`;
  }
}

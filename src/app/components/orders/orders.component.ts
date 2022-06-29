import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/model/Pedido';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  pedidosDoUsuario: Pedido[];

  constructor(
    private pedidoService: PedidoService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.scrollToTop();

    this.auth.user.subscribe((user: Usuario) => {
      this.pedidoService.getByUser(user.idUsuario!).subscribe({
        next: (resp: Pedido[]) => {
          this.pedidosDoUsuario = resp;
        },
        error: (e: any) => {
          alert(e);
        },
      });
    });
  }

  scrollToTop(): void {
    window.scroll(0, 0);
  }
}

import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { DetalhePedido } from './../../model/DetalhePedido';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormaDeEnvio } from 'src/app/enums/FormaDeEnvio';
import { FormaDePagamento } from 'src/app/enums/PagamentoEnum';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css'],
})
export class CheckoutProcessComponent implements OnInit {
  itensComprados: DetalhePedido[];
  usuario = new Usuario();

  formaDeEnvio = FormaDeEnvio;
  formaDePagamento = FormaDePagamento;
  pagamentoEscolhido: FormaDePagamento;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      this.itensComprados = resp;
    });

    this.auth.user.subscribe((user: Usuario) => {
      this.userService.getById(user.idUsuario!).subscribe((userBD: Usuario) => {
        this.usuario = userBD;
      });
    });
  }

  checkPayment(event: any) {
    this.pagamentoEscolhido = event.target.value;
  }

  isCreditCard(): boolean {
    if (this.pagamentoEscolhido == FormaDePagamento.CARTAO) {
      return true;
    }

    return false;
  }
}

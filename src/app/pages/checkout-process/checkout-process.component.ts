import { Router } from '@angular/router';
import { PedidoService } from './../../services/pedido.service';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { DetalhePedido } from './../../model/DetalhePedido';
import { Pedido } from './../../model/Pedido';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormasDePagamentoEnum } from 'src/app/enums/PagamentoEnum';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css'],
})
export class CheckoutProcessComponent implements OnInit {
  itensComprados: DetalhePedido[];
  usuario = new Usuario();

  pedido = new Pedido();

  formaDePagamento = FormasDePagamentoEnum;
  pagamentoEscolhido: FormasDePagamentoEnum;

  finishedOrder = false;

  loading: boolean = false;

  missingPersonalInfo: boolean = false;
  missingAddress: boolean = false;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private userService: UserService,
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);

    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      this.itensComprados = resp;
      this.pedido.detalhePedido = this.itensComprados;
    });

    this.auth.user.subscribe((user: Usuario) => {
      this.userService.getById(user.idUsuario!).subscribe((userBD: Usuario) => {
        this.usuario = userBD;
        this.pedido.usuario = this.usuario;

        this.checkMissingInfo();
      });
    });
  }

  choosePayment(event: any) {
    this.pagamentoEscolhido = event.target.value;
  }

  isCreditCard(): boolean {
    if (this.pagamentoEscolhido == FormasDePagamentoEnum.CARTAO) {
      return true;
    }

    return false;
  }

  paymentChosen(): boolean {
    if (
      this.pagamentoEscolhido != null ||
      this.pagamentoEscolhido != undefined
    ) {
      return true;
    }

    return false;
  }

  finishOrder() {
    this.loading = true;

    if (!this.paymentChosen()) {
      alert('Escolha a forma de pagamento');
      this.router.navigate(['/finalizar-compra'], {
        fragment: 'formaDePagamento',
      });

      this.loading = false;

      return;
    }

    this.pedido.usuario = this.usuario;
    this.pedido.detalhePedido = this.itensComprados;
    this.pedido.formaDePagamento = this.pagamentoEscolhido;
    this.pedido.valorEnvio = 0;

    this.pedidoService.postPedido(this.pedido).subscribe({
      next: (resp: Pedido) => {
        this.finishedOrder = true;

        this.pedido = resp;

        this.cartService.removeAllCart();
      },
      error: (e: any) => {
        console.log(e);

        this.loading = false;
      },
    });
  }

  isFinished(): boolean {
    return this.finishedOrder;
  }

  checkMissingInfo(): void {
    if (
      !this.usuario.cepEndereco ||
      !this.usuario.logradouroEndereco ||
      !this.usuario.numeroEndereco ||
      !this.usuario.bairroEndereco ||
      !this.usuario.complementoEndereco ||
      !this.usuario.cidadeEndereco ||
      !this.usuario.estadoEndereco ||
      !this.usuario.cpfUsuario
    ) {
      this.missingAddress = true;
    }

    if (
      !this.usuario.nomeUsuario ||
      !this.usuario.sobrenomeUsuario ||
      !this.usuario.cpfUsuario ||
      !this.usuario.dataDeNascimento ||
      !this.usuario.telefoneUsuario
    ) {
      this.missingPersonalInfo = true;
    }
  }

  isInfoMissing(): boolean {
    if (this.missingAddress || this.missingPersonalInfo) {
      return true;
    }
    return false;
  }
}

import { DetalhePedido } from './../../model/DetalhePedido';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartList: DetalhePedido[] = [];
  input: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      this.cartList = resp;
    });
  }

  deletarItem(detalhePedido: DetalhePedido) {
    this.cartService.removeCartItem(detalhePedido);

    this.cartService.showMessage('Produto removido com sucesso!');
  }

  inputQuantity(event: any) {
    this.input = event.target.value;
  }

  //Método subtrair
  subtrair(detalhePedido: DetalhePedido) {
    if (detalhePedido.quantidadeProduto! > 1) {
      detalhePedido.quantidadeProduto!--;
    }
    this.updateQuantity(detalhePedido);
  }

  //Método somar
  somar(detalhePedido: DetalhePedido) {
    if (detalhePedido.quantidadeProduto! < 100) {
      detalhePedido.quantidadeProduto!++;
    }
    this.updateQuantity(detalhePedido);
  }

  // Atualizar quantidade do carrinho
  updateQuantity(detalhePedido: DetalhePedido) {
    detalhePedido.subtotal = (detalhePedido.quantidadeProduto!) * detalhePedido.produto?.precoUnitarioProduto!;

    this.cartService.updateCartQuantity(detalhePedido);
  }
}

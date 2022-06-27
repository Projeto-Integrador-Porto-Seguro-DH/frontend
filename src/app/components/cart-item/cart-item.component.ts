import { Component, OnInit } from '@angular/core';
import { DetalhePedido } from 'src/app/model/DetalhePedido';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartList: DetalhePedido[] = [];
  
  constructor( 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      this.cartList = resp;
    })
  }

  deletarItem(detalhePedido: DetalhePedido) {
    this.cartService.removeCartItem(detalhePedido);

    this.cartService.showMessage('Produto removido com sucesso!');
  }

}

import { Component, OnInit } from '@angular/core';
import { DetalhePedido } from 'src/app/model/DetalhePedido';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css'],
})
export class ShoppingCartSummaryComponent implements OnInit {

  subtotal = 0;

  linkIsClicked = false;

  freeShipping = false;

  constructor(
    private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      let totalValue = 0;

      resp.map((item: DetalhePedido) => {
        totalValue += item.produto?.precoUnitarioProduto!;
      });
      this.subtotal = totalValue;

    });
  }

  openDeliveryInput() {
    this.linkIsClicked = !this.linkIsClicked;
    //invertendo valor do linkISClicked
  }

  showFreeShipping() {
    this.freeShipping = !this.freeShipping;
  }
}

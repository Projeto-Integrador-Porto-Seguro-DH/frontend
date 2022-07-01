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

  freeShipping = false;

  cartSize = 0;

  cepInputValue = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      let totalValue: number = 0;

      this.cartSize = resp.length;

      resp.forEach((item: DetalhePedido) => {
        totalValue += +item.subtotal!;
      });

      this.subtotal = totalValue;

      console.log(this.subtotal);
    });
  }

  showFreeShipping() {
    this.freeShipping = !this.freeShipping;
  }

  cepInput(event: any) {
    this.cepInputValue = event.target.value;
  }

  shippingCalculated(): boolean {
    if (this.cepInputValue != '' && this.cepInputValue.length == 8) {
      return true;
    }
    return false;
  }
}

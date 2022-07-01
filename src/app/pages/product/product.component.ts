import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { QuantityInputComponent } from '../../components/quantity-input/quantity-input.component';
import { DetalhePedido } from 'src/app/model/DetalhePedido';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @ViewChild(QuantityInputComponent) quantityInput: QuantityInputComponent;

  produto = new Produto();
  detalhePedido = new DetalhePedido();
  error = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getById(id).subscribe({
      next: (resp: Produto) => {
        this.produto = resp;
      },
      error: (e: any) => {
        this.error = e;
        console.log(`erro: ${this.error}`);
      },
    });
  }

  addToCart() {
    let detalhe = new DetalhePedido();

    this.cartService.cartItemList.forEach((item: DetalhePedido) => {
      if (item.produto?.idProduto == this.produto.idProduto) {
        detalhe = item;
      }
    });

    if (detalhe.produto) {
      console.log('Atualizando');
      detalhe.quantidadeProduto! += this.quantityInput.quantidadeProduto;

      detalhe.subtotal = +(
        detalhe.quantidadeProduto! * detalhe.produto.precoUnitarioProduto!
      );

      this.cartService.updateCartQuantity(detalhe);
    } else {
      console.log('Adicionando novo');
      this.detalhePedido.produto = this.produto;

      this.detalhePedido.quantidadeProduto =
        this.quantityInput.quantidadeProduto;

      this.detalhePedido.subtotal = +(
        this.detalhePedido.quantidadeProduto *
        this.produto.precoUnitarioProduto!
      );

      this.cartService.addToCart(this.detalhePedido);
    }
  }

  addToCartAndGo() {
    this.addToCart();

    this.router.navigate(['/carrinho']);
  }
}

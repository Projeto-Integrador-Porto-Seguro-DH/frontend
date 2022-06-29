import { DetalhePedido } from './../model/DetalhePedido';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: DetalhePedido[] = [];
  public productList: BehaviorSubject<DetalhePedido[]>;

  constructor(
    private localStorage: LocalStorageService,
    private matSnackBar: MatSnackBar
  ) {
    this.productList = new BehaviorSubject<DetalhePedido[]>(
      this.localStorage.get('cart')
    );

    console.log('productList');
    console.log(this.productList.value);
    console.log('localStorage');
    console.log(this.localStorage.get('cart'));
  }

  getProducts() {
    if (!this.compareCartAndStorage()) {
      this.cartItemList = this.localStorage.get('cart');
      this.productList.next(this.cartItemList);
    }

    return this.productList.asObservable();
  }

  // setProduct(produto: DetalhePedido[]) {
  //   this.cartItemList.push(...produto);

  //   this.productList.next(produto);
  // }

  //Compara se o que está armazenado é diferente do carrinho[]
  compareCartAndStorage(): boolean {
    if (this.localStorage.get('cart') == this.cartItemList) {
      return true;
    }
    return false;
  }

  //Método adicionar item por item ao nosso carrinho
  addToCart(detalhePedido: DetalhePedido) {
    if (!this.compareCartAndStorage()) {
      this.cartItemList = this.localStorage.get('cart');
    }

    this.cartItemList.push(detalhePedido);

    this.localStorage.set('cart', this.cartItemList);

    this.productList.next(this.cartItemList);
  }

  updateCartQuantity(detalhePedido: DetalhePedido) {
    this.cartItemList.forEach((item: DetalhePedido) => {
      if (item == detalhePedido) {
        item.quantidadeProduto = detalhePedido.quantidadeProduto;
        item.subtotal = detalhePedido.subtotal;

        this.localStorage.set('cart', this.cartItemList);

        this.productList.next(this.cartItemList);
      }
    });
  }

  removeCartItem(detalhePedido: DetalhePedido) {
    if (!this.compareCartAndStorage()) {
      this.cartItemList = this.localStorage.get('cart');
    }

    this.cartItemList.map((item: DetalhePedido) => {
      if (detalhePedido.produto?.idProduto === item.produto?.idProduto) {
        this.cartItemList.splice(this.cartItemList.indexOf(item), 1);
      }
    });

    this.localStorage.set('cart', this.cartItemList);

    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.localStorage.remove('cart');
    this.productList.next(this.cartItemList);
  }

  //Método Mostra MSG
  showMessage(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

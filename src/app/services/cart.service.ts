import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetalhePedido } from '../model/DetalhePedido';
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
    return this.productList.asObservable();
  }

  // setProduct(produto: DetalhePedido[]) {
  //   this.cartItemList.push(...produto);

  //   this.productList.next(produto);
  // }

  //Método adicionar item por item ao nosso carrinho
  compareCartAndStorage(): boolean {
    if (this.localStorage.get('cart') == this.cartItemList) {
      return true;
    }
    return false;
  }

  addToCart(detalhePedido: DetalhePedido) {
    if (!this.compareCartAndStorage()) {
      this.cartItemList = this.localStorage.get('cart');
    }

    this.cartItemList.push(detalhePedido);

    this.localStorage.set('cart', this.cartItemList);

    this.productList.next(this.cartItemList);
  }

  getTotalItems() {
    let itens = 0;

    this.cartItemList.forEach((item: DetalhePedido) => {
      itens += item.quantidadeProduto!;
    });

    return itens;
  }

  getTotalPrice() {
    let totalValue = 0;

    this.cartItemList.map((item: DetalhePedido) => {
      totalValue += item.produto?.precoUnitarioProduto!;
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

  //Método Mostra msg cadastrado com sucesso
  showMessage(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: 'right', //talvez mudar pada center e center!
      verticalPosition: 'top',
    });
  }
}

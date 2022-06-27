import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DetalhePedido } from '../model/DetalhePedido';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: DetalhePedido[] = [];
  public productList = new BehaviorSubject<DetalhePedido[]>([]);

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  getProducts() {
    return this.productList.asObservable();
  }

  // setProduct(produto: DetalhePedido[]) {
  //   this.cartItemList.push(...produto);

  //   this.productList.next(produto);
  // }

  //Método adicionar item por item ao nosso carrinho
  addToCart(detalhePedido: DetalhePedido) {
    this.cartItemList.push(detalhePedido);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() {
    let totalValue = 0;

    this.cartItemList.map((item: DetalhePedido)  => {
      totalValue += item.produto?.precoUnitarioProduto!;
    });
  }

  removeCartItem(detalhePedido: DetalhePedido) {
    this.cartItemList.map((item: DetalhePedido, index : number) => {

      if(detalhePedido.produto?.idProduto === item.produto?.idProduto) {
        this.cartItemList.splice(index, 1);
      }
    });

    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
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

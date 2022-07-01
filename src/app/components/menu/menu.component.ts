import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { DetalhePedido } from '../../model/DetalhePedido';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  user: Usuario;

  itemOnCart: number = 0;

  category = '';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private cartService: CartService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((userAuth) => {
      if (userAuth == null) {
        return;
      }

      this.userService
        .getById(userAuth.idUsuario!)
        .subscribe((user: Usuario) => {
          this.user = user;
        });
    });

    this.cartService.getProducts().subscribe((resp: DetalhePedido[]) => {
      let itens = 0;

      resp.forEach((item: DetalhePedido) => {
        itens += item.quantidadeProduto!;
      });

      this.itemOnCart = itens;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.user ? true : false;
  }

  isAdmin() {
    if (this.user != null) {
      return this.user.admin;
    }

    return console.log('Usuário não logado');
  }

  isNotEmpty(): boolean {
    if (this.itemOnCart > 0) {
      return true;
    }

    return false;
  }

  selectCategory(category: string) {
    this.category = category;

    this.productService.searchByCategory.next(this.category);

    this.router.navigate([`categorias/${this.category}`]);
  }
}

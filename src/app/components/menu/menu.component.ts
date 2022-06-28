import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { DetalhePedido } from 'src/app/model/DetalhePedido';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  user: Usuario;

  itemOnCart: number = 0;

  constructor(
    private authService: AuthService,
    private cartService: CartService
    ) {
    this.authService.user.subscribe((userAuth) => (this.user = userAuth));
  }

  ngOnInit(): void {
    this.itemOnCart = this.cartService.getTotalItems(); 
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    // return this.user ? true : false;
    return true;
  }

  isAdmin(): boolean {
    if (this.isAuthenticated()) {
      return true;
    }
    return false;
  }

  isEmpty (): boolean {
    if (this.itemOnCart > 0) {
      return true;
    }
    
    return false;
  }
}

import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  user: Usuario;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((userAuth) => (this.user = userAuth));
  }

  ngOnInit(): void {}

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
}

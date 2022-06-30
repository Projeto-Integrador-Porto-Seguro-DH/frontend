import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css', '../menu/menu.component.css'],
})
export class ProfileTabsComponent implements OnInit {
  admin: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((userAuth) => {
      this.userService
        .getById(userAuth.idUsuario!)
        .subscribe((user: Usuario) => {
          this.admin = user.admin!;
        });
    });
  }

  isAdmin(): boolean {
    return this.admin;
  }
}

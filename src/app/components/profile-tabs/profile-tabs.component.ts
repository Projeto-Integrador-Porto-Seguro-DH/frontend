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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe((usuario: Usuario) => {
      this.admin = usuario.admin!;
    });
  }

  isAdmin(): boolean {
    return this.admin;
  }
}

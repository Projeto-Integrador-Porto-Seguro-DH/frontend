import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  usuario: Usuario;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authService.user.subscribe((user: Usuario) => {
      this.userService.getById(user.idUsuario!).subscribe((resp: Usuario) => {
        this.usuario = resp;
      });
    });

    if (this.usuario.admin) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}

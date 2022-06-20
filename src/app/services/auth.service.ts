import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UserLogin } from './../model/Login';
import { UserCadastro } from './../model/Cadastro';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<UserLogin>;
  public user: Observable<UserLogin>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<UserLogin>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): UserLogin {
    return this.userSubject.value;
  }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http
      .post<UserLogin>(`${environment.apiUrl}/usuarios/login`, userLogin)
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  register(userCadastro: UserCadastro): Observable<Usuario> {
    return this.http.post<Usuario>(
      `${environment.apiUrl}/usuarios/cadastrar`,
      userCadastro
    );
  }
}

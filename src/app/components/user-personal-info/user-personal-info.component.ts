import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EstadosEnum } from '../../enums/EstadosEnum';
import { Usuario } from '../../model/Usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.css'],
})
export class UserPersonalInfoComponent implements OnInit {
<<<<<<< HEAD
  public usuario: Usuario = new Usuario();
  public usuarioNoBD: Usuario;
=======
  public usuario = new Usuario();
>>>>>>> e03ebc94256719490b9ef6e39f8bf8fc12dd7d4c
  public estados = EstadosEnum;
  public confirmacaoSenha: string;
  public error = '';

  @ViewChild('passwordForm') passForm: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.authService.user.subscribe((userAuth) => (this.usuario = userAuth));

    this.userService
      .getById(this.usuario.idUsuario!)
      .subscribe((userBD) => (this.usuarioNoBD = userBD));
=======
    this.authService.user.subscribe((userAuth) => {
      this.userService
        .getById(userAuth.idUsuario!)
        .subscribe((user) => (this.usuario = user));
    });
>>>>>>> e03ebc94256719490b9ef6e39f8bf8fc12dd7d4c
  }

  refresh(): void {
    window.location.reload();
  }

  clearForm(): void {
    this.passForm.nativeElement.value = '';
  }

  confirmarSenha(event: any) {
    this.confirmacaoSenha = event.target.value;
  }

  updateOnSubmit() {
    if (this.usuario.senhaUsuario != this.confirmacaoSenha) {
      alert('As senhas digitadas estão diferentes!');
      return;
    }

    this.userService
      .update(this.usuario)
      .pipe(first())
      .subscribe({
        next: (resp: Usuario) => {
          this.usuario = resp;
          alert('Cadastro atualizado com sucesso!');
          this.refresh();
        },
        error: (error) => {
          this.error = error;
          console.log(this.error);
        },
      });
  }

  delete() {
    this.userService
      .delete(this.usuario.emailUsuario)
      .pipe(first())
      .subscribe({
        next: () => {
          alert('Conta apagada com sucesso!');
          this.authService.logout();
        },
        error: (error) => {
          this.error = error;
          console.log(this.error);
        },
      });
  }
}

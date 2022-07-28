import { AlertService } from './../../services/alert.service';
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
  public usuario = new Usuario();
  public estados = EstadosEnum;
  public confirmacaoSenha: string;

  public error = '';
  public loading = false;

  @ViewChild('passwordForm') passForm: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((userAuth) => {
      this.userService
        .getById(userAuth.idUsuario!)
        .subscribe((user: Usuario) => {
          this.usuario = user;

          console.log(this.usuario);
        });
    });
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
    this.loading = true;

    if (this.usuario.senhaUsuario != this.confirmacaoSenha) {
      this.alertService.alertInfo('As senhas digitas estão diferentes. Tente novamente!');
      this.loading = false;
      return;
    }

    this.userService
      .update(this.usuario)
      .pipe(first())
      .subscribe({
        next: (resp: Usuario) => {
          this.usuario = resp;
          this.alertService.alertSuccess('Cadastro atualizado com sucesso!');
          this.refresh();
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
          console.log(this.error);
        },
      });
  }

  delete() {
    this.userService.delete(this.usuario.emailUsuario).subscribe({
      next: () => {
        this.alertService.alertSuccess('Conta deletada com sucesso');
        this.authService.logout();
      },
      error: (error) => {
        this.error = error;
        console.log(this.error);
      },
    });
  }
}

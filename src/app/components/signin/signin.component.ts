import { AlertService } from './../../services/alert.service';
import { UserCadastro } from './../../model/Cadastro';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  private REGEX_SENHA = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$';

  user = new Usuario();
  userRegister = new UserCadastro();
  confirmacaoSenha: string;

  error = '';

  loading = false;

  activePassword: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) // private notificationsService: NotificationsService
  {}

  ngOnInit(): void {}

  confirmarSenha(event: any): void {
    this.confirmacaoSenha = event.target.value;
  }

  onSubmit(): void {
    if (!this.userRegister.senhaUsuario.match(this.REGEX_SENHA)) {
      this.alertService.alertInfo(
        'Sua senha deve conter os requisitos obrigatórios!'
      );
      return;
    }

    if (this.userRegister.senhaUsuario != this.confirmacaoSenha) {
      this.alertService.alertError(
        'As senhas digitas estão diferentes. Tente novamente!'
      );
      return;
    }

    this.loading = true;

    this.authService.register(this.userRegister).subscribe({
      next: (resp: Usuario) => {
        this.user = resp;
        this.alertService.alertSuccess('Cadastro realizado com sucesso!');
        this.router.navigate(['/entrar']);
      },
      error: (error) => {
        this.error = error;
        console.log(this.error);
        this.alertService.alertError(this.error);
        this.loading = false;
      },
    });
  }

  showPasswordRequirement() {
    this.activePassword = false;
  }
}

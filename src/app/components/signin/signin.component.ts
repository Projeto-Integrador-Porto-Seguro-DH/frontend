import { UserCadastro } from './../../model/Cadastro';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from 'src/app/model/Usuario';
import { NotificationsService } from 'src/app/services/notifications.service';

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
    private notificationsService: NotificationsService
    ) {}

  ngOnInit(): void {}

  confirmarSenha(event: any): void {
    this.confirmacaoSenha = event.target.value;
  }

  onSubmit(): void {
    if (!this.userRegister.senhaUsuario.match(this.REGEX_SENHA)) {
      this.notificationsService.showMessage("Sua senha não preenche os requerimentos necessários!")
      // alert('Sua senha não preenche os requerimentos necessários!');
      return;
    }

    if (this.userRegister.senhaUsuario != this.confirmacaoSenha) {
      this.notificationsService.showMessage("As senhas digitadas estão diferentes!")
      // alert('As senhas digitadas estão diferentes!');
      return;
    }

    this.loading = true;

    this.authService.register(this.userRegister).subscribe({
      next: (resp: Usuario) => {
        this.user = resp;

        this.router.navigate(['/entrar']);
        this.notificationsService.showMessage("Usuário cadastrado com sucesso!")
        // alert('Usuário cadastrado com sucesso!');
      },
      error: (error: Error) => {
        this.error = error.message;
        console.log(this.error);
        this.loading = false;
      },
    });
  }

  showPasswordRequirement() {
    this.activePassword = false;
  }
}

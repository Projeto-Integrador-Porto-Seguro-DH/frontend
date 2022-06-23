import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';

import { UserCadastro } from 'src/app/model/Cadastro';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = new Usuario();
  userRegister = new UserCadastro();
  confirmacaoSenha: string;

  error = '';

  activePassword: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  confirmarSenha(event: any): void {
    this.confirmacaoSenha = event.target.value;
  }

  onSubmit(): void {
    if (this.userRegister.senhaUsuario != this.confirmacaoSenha) {
      alert('As senhas digitadas estão diferentes!');
    }

    this.authService
      .register(this.userRegister)
      .pipe(first())
      .subscribe({
        next: (resp: Usuario) => {
          this.user = resp;
          this.router.navigate(['/']);
          alert('Usuário cadastrado com sucesso!');
        },
        error: (error: Error) => {
          this.error = error.message;
          console.log(this.error);
        },
      });
  }

  showPasswordRequirement() {
    this.activePassword = false;
  }
}

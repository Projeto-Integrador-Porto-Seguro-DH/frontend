import { UserCadastro } from './../../model/Cadastro';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

import { Usuario } from 'src/app/model/Usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  userForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nomeUsuario: new FormControl('', [Validators.required]),
      sobrenomeUsuario: new FormControl('', [Validators.required]),
      emailUsuario: new FormControl('', [Validators.required]),
      senhaUsuario: new FormControl('', [Validators.required]),
      confirmarFormSenha: new FormControl('', [Validators.required]),
    })
  }

  get nomeUsuario() {
    return this.userForm.get('nomeUsuario')!;
  }

  get sobrenomeUsuario() {
    return this.userForm.get('sobrenomeUsuario')!;
  }

  get emailUsuario() {
    return this.userForm.get('emailUsuario')!;
  }

  get senhaUsuario() {
    return this.userForm.get('senhaUsuario')!;
  }

  get confirmarFormSenha() {
    return this.userForm.get('confirmarFormSenha')!;
  }

  confirmarSenha(event: any): void {
    this.confirmacaoSenha = event.target.value;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      console.log('Enviou Formulario')
      return;
    }

    if (!this.userForm.get('senhaUsuario')?.value.match(this.REGEX_SENHA)) {
      alert('Sua senha não preenche os requerimentos necessários!');
      return;
    }

    if (this.userForm.get('senhaUsuario')?.value!= this.confirmacaoSenha) {
      alert('As senhas digitadas estão diferentes!');
      return;
    }

    this.loading = true;

    console.log('Antes' +this.userRegister)
    this.transformData();
    console.log('Depois' +this.userRegister)

    this.authService.register(this.userRegister).subscribe({
      next: (resp: Usuario) => {
        this.user = resp;

        this.router.navigate(['/entrar']);
        alert('Usuário cadastrado com sucesso!');
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

  transformData() {
    this.userRegister.nomeUsuario = this.userForm.get('nomeUsuario')?.value;
    this.userRegister.sobrenomeUsuario = this.userForm.get('sobrenomeUsuario')?.value;
    this.userRegister.emailUsuario = this.userForm.get('emailUsuario')?.value;
    this.userRegister.senhaUsuario = this.userForm.get('senhaUsuario')?.value;
  }
}

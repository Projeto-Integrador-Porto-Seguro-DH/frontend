import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EstadosEnum } from '../../enums/EstadosEnum';
import { Usuario } from '../../model/Usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  personalInfoForm: FormGroup;
  addressForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((userAuth) => {
      this.userService
        .getById(userAuth.idUsuario!)
        .subscribe((user: Usuario) => {
          this.usuario = user;

          this.updateFormsOnInit();

          console.log(user);
        });
    });

    this.personalInfoForm = this.formBuilder.group({
      nomeUsuario: ['', [Validators.required]],
      sobrenomeUsuario: ['', [Validators.required]],
      emailUsuario: { value: '', disabled: true },
      cpfUsuario: '',
      dataDeNascimento: '',
      telefoneUsuario: '',
      compartilharDados: false,
    });

    this.addressForm = this.formBuilder.group({
      cepEndereco: [1, [Validators.required]],
      logradouroEndereco: ['', [Validators.required]],
      numeroEndereco: [1, [Validators.required]],
      bairroEndereco: ['', [Validators.required]],
      complementoEndereco: '',
      cidadeEndereco: ['', [Validators.required]],
      estadoEndereco: ['', [Validators.required]],
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
      alert('As senhas digitadas estão diferentes!');
      this.loading = false;
      return;
    }

    this.parseDataToUser();

    this.userService.update(this.usuario).subscribe({
      next: (resp: Usuario) => {
        this.usuario = resp;
        alert('Cadastro atualizado com sucesso!');
        this.refresh();
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
        alert(this.error);
      },
    });
  }

  delete() {
    this.userService.delete(this.usuario.emailUsuario).subscribe({
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

  updateFormsOnInit() {
    this.personalInfoForm.patchValue({
      nomeUsuario: this.usuario.nomeUsuario,
      sobrenomeUsuario: this.usuario.sobrenomeUsuario,
      emailUsuario: this.usuario.emailUsuario,
      cpfUsuario: this.usuario.cpfUsuario,
      dataDeNascimento: this.usuario.dataDeNascimento,
      telefoneUsuario: this.usuario.telefoneUsuario,
      compartilharDados: this.usuario.compartilharDadosUsuario,
    });

    this.addressForm.patchValue({
      cepEndereco: this.usuario.cepEndereco,
      logradouroEndereco: this.usuario.logradouroEndereco,
      numeroEndereco: this.usuario.numeroEndereco,
      bairroEndereco: this.usuario.bairroEndereco,
      complementoEndereco: this.usuario.complementoEndereco,
      cidadeEndereco: this.usuario.cidadeEndereco,
      estadoEndereco: this.usuario.estadoEndereco,
    });
  }

  parseDataToUser() {
    this.usuario.nomeUsuario = this.personalInfoForm.get('nomeUsuario')?.value;
    this.usuario.sobrenomeUsuario =
      this.personalInfoForm.get('sobrenomeUsuario')?.value;
    this.usuario.cpfUsuario = this.personalInfoForm.get('cpfUsuario')?.value;
    this.usuario.dataDeNascimento =
      this.personalInfoForm.get('dataDeNascimento')?.value;
    this.usuario.telefoneUsuario =
      this.personalInfoForm.get('telefoneUsuario')?.value;
    this.usuario.compartilharDadosUsuario =
      this.personalInfoForm.get('compartilharDados')?.value;

    this.usuario.cepEndereco = this.addressForm.get('cepEndereco')?.value;
    this.usuario.logradouroEndereco =
      this.addressForm.get('logradouroEndereco')?.value;
    this.usuario.numeroEndereco = this.addressForm.get('numeroEndereco')?.value;
    this.usuario.bairroEndereco = this.addressForm.get('bairroEndereco')?.value;
    this.usuario.complementoEndereco = this.addressForm.get(
      'complementoEndereco'
    )?.value;
    this.usuario.cidadeEndereco = this.addressForm.get('cidadeEndereco')?.value;
    this.usuario.estadoEndereco = this.addressForm.get('estadoEndereco')?.value;

    console.log(this.addressForm.get('cepEndereco')?.value);
  }
}

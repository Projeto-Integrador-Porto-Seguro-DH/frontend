import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EstadosEnum } from '../../enums/EstadosEnum';
import { Usuario } from '../../model/Usuario';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.css'],
})
export class UserPersonalInfoComponent implements OnInit {
  public usuario: Usuario = new Usuario();
  public usuarioNoBD: Usuario;
  public estados = EstadosEnum;

  @ViewChild('passwordForm') passForm: any;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((userAuth) => (this.usuario = userAuth));

    this.userService
      .getById(this.usuario.idUsuario!)
      .subscribe((userBD) => (this.usuarioNoBD = userBD));
  }

  refresh(): void {
    window.location.reload();
  }

  clearForm(): void {
    this.passForm.nativeElement.value = '';
  }

  updateProfile(): void {
    console.log(
      'Aqui será implementado o método PUT para atualizar o cadastro do usuário'
    );
  }

  deleteAccount(): void {
    console.log(
      'Aqui será implementado o método DELETE para deletar o cadastro do usuário'
    );
  }
}

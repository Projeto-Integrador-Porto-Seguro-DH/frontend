import { Usuario } from './../../model/Usuario';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.component.css'],
})
export class UserPersonalInfoComponent implements OnInit {
  public usuario: Usuario;

  @ViewChild('passwordForm') passForm: any;

  constructor() {}

  ngOnInit(): void {
    this.usuario = {
      idUsuario: 1,
      nomeUsuario: 'João',
      sobrenomeUsuario: 'Silva',
      emailUsuario: 'joao.silva@gmail.com',
      senhaUsuario: 'Senhateste123',
      dataDeNascimento: '2000-04-25',
      cpfUsuario: '123.456.789-00',
      telefoneUsuario: 11981053464,
      compartilharDadosUsuario: true,
      logradouroEndereco: 'Rua Teste',
      cepEndereco: 12345678,
      numeroEndereco: 123,
      bairroEndereco: 'Bairro dos Testes',
      complementoEndereco: 'Casa',
      cidadeEndereco: 'São Paulo',
      estadoEndereco: 'SP',
      formasDePagamento: 'Cartão de Crédito',
      pedido: [],
    };
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
}

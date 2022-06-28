import { Component, OnInit } from '@angular/core';
import { FormaDeEnvio } from 'src/app/enums/FormaDeEnvio';
import { FormaDePagamento } from 'src/app/enums/PagamentoEnum';

@Component({
  selector: 'app-checkout-process',
  templateUrl: './checkout-process.component.html',
  styleUrls: ['./checkout-process.component.css'],
})
export class CheckoutProcessComponent implements OnInit {
  itensComprados: any[];
  formaDeEnvio = FormaDeEnvio;
  formaDePagamento = FormaDePagamento;
  constructor() {}

  ngOnInit(): void {
    this.itensComprados = [
      {
        nome: 'Queijo Brie',
        descricao: 'Inteiro 500gr',
        preco: 'R$ 200,00',
        categoria: 'Queijos',
        foto: '../../assets/img/products/queijo/queijo4.jpg',
      },
      {
        nome: 'Queijo Parmesão',
        descricao: 'Ralado 150gr',
        preco: 'R$ 18,00',
        categoria: 'Queijos',
        foto: '../../assets/img/products/queijo/queijo4.jpg',
      },
      {
        nome: 'Queijo 3',
        descricao: 'Ralado 150gr',
        preco: 'R$ 28,00',
        categoria: 'Queijos',
        foto: '../../assets/img/products/queijo/queijo4.jpg',
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  produtos: any[];

  categoria: string;

  constructor() {}

  ngOnInit(): void {
    this.produtos = [
      {
        idProduto: 1,
        nome: 'Queijo 1',
        descricao: 'Queijo muito bom!',
        preco: 'R$ 300,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo1.jpg',
      },
      {
        idProduto: 2,
        nome: 'Queijo 2',
        descricao: 'Este queijo também é muito bom!',
        preco: 'R$ 400,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo2.jpg',
      },
      {
        idProduto: 3,
        nome: 'Queijo 3',
        descricao: 'Mais um queijo muito bom!',
        preco: 'R$ 500,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo3.jpg',
      },
      {
        idProduto: 4,
        nome: 'Queijo 4',
        descricao: 'Este queijo é excelente!',
        preco: 'R$ 600,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo4.jpg',
      },
    ];

    this.categoria = this.produtos[0].categoria;
  }
}

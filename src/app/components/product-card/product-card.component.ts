import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  public queijos: any;

  constructor() {}

  ngOnInit(): void {
    this.queijos = [
      {
        nome: 'Queijo 1',
        descricao: 'Queijo muito bom!',
        preco: 'R$ 300,00',
        foto: '../../../assets/img/products/queijo/queijo1.jpg',
      },
      {
        nome: 'Queijo 2',
        descricao: 'Este queijo também é muito bom!',
        preco: 'R$ 400,00',
        foto: '../../../assets/img/products/queijo/queijo2.jpg',
      },
      {
        nome: 'Queijo 3',
        descricao: 'Mais um queijo muito bom!',
        preco: 'R$ 500,00',
        foto: '../../../assets/img/products/queijo/queijo3.jpg',
      },
    ];
  }
}

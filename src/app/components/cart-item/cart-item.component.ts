import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  itensComprados: any;
  

  constructor() { }

  ngOnInit(): void {
    this.itensComprados = [
      { nome: 'Queijo Brie',
        descricao: 'Inteiro 500gr',
        preco:'R$ 200,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo4',
      },
      { nome: 'Queijo Parmesão',
        descricao: 'Ralado 150gr',
        preco:'R$ 18,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo3',
      },
      { nome: 'Queijo 3',
        descricao: 'Ralado 150gr',
        preco:'R$ 28,00',
        categoria: 'Queijos',
        foto: '../../../assets/img/products/queijo/queijo2',
      },
    ];
  }

  deletarItem() {
  }


}

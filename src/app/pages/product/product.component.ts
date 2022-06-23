import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  produto = new Produto();

  constructor() {}

  ngOnInit(): void {
    this.produto = {
      idProduto: 1,
      nomeProduto: 'Queijo',
      descricaoProduto: 'Queijo muito bom',
      precoUnitarioProduto: 59.9,
      fotoProduto: '../../../assets/img/products/queijo/queijo1.jpg',
      estoqueProduto: 100,
      produtoDisponivel: true,
    };
  }
}

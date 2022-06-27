import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm = '';

  listaDeProdutos: Produto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    window.scroll(0, 0);

    this.productService.search.subscribe((searchedTerm: string) => {
      this.searchTerm = searchedTerm;
    });

    this.listaDeProdutos = [
      {
        idProduto: 1,
        nomeProduto: 'Queijo 1',
        descricaoProduto: 'Queijo muito bom!',
        precoUnitarioProduto: 300,
        fotoProduto: '../../../assets/img/products/queijo/queijo1.jpg',
      },
      {
        idProduto: 5,
        nomeProduto: 'Queijo 2',
        descricaoProduto: 'Queijo muito bom 2!',
        precoUnitarioProduto: 300,
        fotoProduto: '../../../assets/img/products/queijo/queijo1.jpg',
      },
      {
        idProduto: 2,
        nomeProduto: 'Vinho 2',
        descricaoProduto: 'Este queijo também é muito bom!',
        precoUnitarioProduto: 400,
        fotoProduto: '../../../assets/img/products/queijo/queijo2.jpg',
      },
      {
        idProduto: 3,
        nomeProduto: 'Geléia 3',
        descricaoProduto: 'Mais um queijo muito bom!',
        precoUnitarioProduto: 500,
        fotoProduto: '../../../assets/img/products/queijo/queijo3.jpg',
      },
      {
        idProduto: 4,
        nomeProduto: 'Macarrão 4',
        descricaoProduto: 'Este queijo é excelente!',
        precoUnitarioProduto: 600,
        fotoProduto: '../../../assets/img/products/queijo/queijo4.jpg',
      },
    ];
  }

  search(event: any): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.searchTerm);
  }

  searchEmpty(): boolean {
    if (this.searchTerm == '') {
      return true;
    }
    return false;
  }
}

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

    this.productService.getProduct().subscribe((resp: Produto[]) => {
      this.listaDeProdutos = resp;
    });
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

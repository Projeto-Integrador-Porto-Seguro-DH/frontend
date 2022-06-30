import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public listaDeProdutos: Produto[] = [];
  searchByCategory = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((resp: Produto[]) => {
      this.listaDeProdutos = resp;
    });

    this.productService.searchByCategory.subscribe((resp: string) => {
      this.searchByCategory = resp;

      console.log(this.searchByCategory);
    });
  }

  searchEmpty(): boolean {
    if (this.searchByCategory == '') {
      return true;
    }

    return false;
  }

  goToCategories() {
    this.productService.searchByCategory.next('');

    this.router.navigate(['categorias']);
  }
}

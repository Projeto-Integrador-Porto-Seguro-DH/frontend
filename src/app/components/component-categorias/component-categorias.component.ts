import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-component-categorias',
  templateUrl: './component-categorias.component.html',
  styleUrls: ['./component-categorias.component.css']
})
export class ComponentCategoriasComponent implements OnInit {

  selectedCategory = '';

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.selectedCategory = category;

    this.productService.searchByCategory.next(this.selectedCategory);

    this.router.navigate([`categorias/${this.selectedCategory}`]);
  }

}

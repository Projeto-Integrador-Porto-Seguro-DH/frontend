import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  goToCategories() {
    this.productService.searchByCategory.next('');

    this.router.navigate(['categorias']);
  }
}

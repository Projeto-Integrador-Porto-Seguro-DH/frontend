import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css'],
})
export class ModalSearchComponent implements OnInit {
  searchTerm: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  search(event: any): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  goToSearch(): void {
    this.productService.search.next(this.searchTerm);
    this.router.navigate(['/pesquisa']);
  }
}

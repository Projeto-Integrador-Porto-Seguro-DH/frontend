import { first } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { CategoryService } from 'src/app/services/category.service';
import { Categoria } from 'src/app/model/Categoria';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  produto = new Produto();
  categorias: Categoria[];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
      this.categorias = resp;
    });

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getById(id).subscribe((resp: Produto) => {
      this.produto = resp;
      console.log(this.produto);
      console.log(this.produto.categoria);
    });
  }

  onSubmit() {
    this.productService.putProduct(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.refresh();
    });
  }

  refresh() {
    window.location.reload();
  }

  updateCategory(categoriaSelecionada: Categoria) {
    console.log(categoriaSelecionada);
    this.produto.categoria = categoriaSelecionada;
  }

  selected(id: number) {
    if (this.produto.categoria?.idCategoria == id) {
      return true;
    }
    return null;
  }
}
import { AlertService } from './../../../services/alert.service';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';
import { Categoria } from 'src/app/model/Categoria';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  produto = new Produto();
  erro = '';
  categorias: Categoria[];

  loading = false;

  @ViewChild('cadastrar') cadastrar: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private alertService: AlertService
  ) {}

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
      this.categorias = resp;
    });
  }

  onSubmit(): void {
    this.loading = true;

    this.productService.postProduct(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.alertService.alertSuccess('Produto cadastrado com sucesso!');
      this.refresh();
    });
  }

  clearFormCadastrar(): void {
    this.cadastrar.nativeElement.value = '';
  }

  setCategory(categoriaSelecionada: Categoria) {
    this.produto.categoria = categoriaSelecionada;
    console.log(this.produto.categoria);
  }
}

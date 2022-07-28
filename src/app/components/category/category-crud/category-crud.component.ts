import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../../model/Categoria';
import { CategoryService } from '../../../services/category.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css'],
})
export class CategoryCrudComponent implements OnInit {
  public categoriaLista: Categoria[];
  categoria: Categoria = new Categoria();
  error = '';

  loading = false;

  @ViewChild('cadastrar') cadastrar: any;

  constructor(
    private categoryService: CategoryService,
    private alertService: AlertService
    ) {}

  ngOnInit(): void {}

  // CREATE
  submit() {
    this.loading = true;

    this.categoryService
      .postCategory(this.categoria)
      .pipe(first())
      .subscribe({
        next: (resp: Categoria) => {
          this.alertService.alertSuccess('Categoria cadastrada com sucesso!');
          this.categoria = resp;
          this.loading = false;
        },
        error: (e: any) => {
          this.loading = false;
          this.error = e;
          alert(this.error);
        },
      });
  }

  clearFormCadastrar() {
    this.cadastrar.nativeElement.value = '';
  }
}

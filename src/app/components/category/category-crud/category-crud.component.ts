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

  @ViewChild('cadastrar') cadastrar: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  // CREATE
  submit() {
    this.categoryService
      .postCategory(this.categoria)
      .pipe(first())
      .subscribe({
        next: (resp: Categoria) => {
          this.categoryService.showMessage('Categoria cadastrada com sucesso!');
          this.categoria = resp;
        },
        error: (e: any) => {
          this.error = e;
          alert(this.error);
        },
      });
  }

  clearFormCadastrar() {
    this.cadastrar.nativeElement.value = '';
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Categoria } from '../../../model/Categoria';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  categoria: Categoria = new Categoria();
  error: '';

  @ViewChild('atualizar') atualizar: any;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  // UPDATE - EDIT
  update() {
    this.categoryService.updateCategory(this.categoria).pipe(first()).subscribe({
      next:(resp: Categoria) => {
        this.categoryService.showMessage('Categoria editada com sucesso!')
        this.categoria = resp;
      },
      error: (e: any) => {
        this.error = e;
        alert(this.error);
      }
    });
  }

}

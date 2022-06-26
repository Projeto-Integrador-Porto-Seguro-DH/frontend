import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Categoria } from '../../../model/Categoria';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent implements OnInit {
  categoria = new Categoria();
  error = '';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.categoryService.getById(id).subscribe({
      next: (resp: Categoria) => {
        this.categoria = resp;
      },
      error: (e: any) => {
        this.error = e;
        console.log(`erro: ${this.error}`);
      },
    });
  }

  // UPDATE - EDIT
  update() {
    this.categoryService.updateCategory(this.categoria).subscribe({
      next: (resp: Categoria) => {
        this.categoryService.showMessage('Categoria editada com sucesso!');
        this.categoria = resp;
      },
      error: (e: any) => {
        this.error = e;
        alert(this.error);
      },
    });
  }
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../../model/Categoria';
import { CategoryService } from '../../../services/category.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  categoryForm!: FormGroup;

  @ViewChild('cadastrar') cadastrar: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      idCategoria: new FormControl('', [Validators.required]),
      nomeCategoria: new FormControl('', [Validators.required]),
      descricaoCategoria: new FormControl(''),
    });
  }

  // FORMA VALIDATION
  get nomeCategoria() {
    return this.categoryForm.get('nomeCategoria')!;
  }

  get descricaoCategoria() {
    return this.categoryForm.get('descricaoCategoria')!;
  }

  // CREATE
  submit() {
    this.loading = true;

    if (this.categoryForm.invalid) {
      return;
    }
    
    this.categoryService
      .postCategory(this.categoria)
      .pipe(first())
      .subscribe({
        next: (resp: Categoria) => {
          this.categoryService.showMessage('Categoria cadastrada com sucesso!');
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

import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {
  public categoriaLista: Categoria[];

  constructor(
    private categoryService: CategoryService,
  ) { }

  // READ
  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
        this.categoriaLista = resp;
      })
  }

  getAllCategories(){

  }
}

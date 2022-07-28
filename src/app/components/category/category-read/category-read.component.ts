import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Categoria } from 'src/app/model/Categoria';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryReadDataSource } from './category-read-datasource';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css'],
})
export class CategoryReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Categoria>;

  dataSource: CategoryReadDataSource;
  index: number;

  //Exibição das colunas do Header da Tabela:
  displayedColumns = ['id', 'nome', 'descricao', 'gerenciar'];

  constructor(
    private categoryService: CategoryService,
    private alertService: AlertService
    ) {
    this.dataSource = new CategoryReadDataSource();
  }

  // READ
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
      this.dataSource.data = resp;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  // PEGAR ID
  pegarId(id: number) {
    this.index = id;
  }
  
  // DELETE
  delete() {
    this.categoryService.deleteCategory(this.index).subscribe(() => {
      this.alertService.alertSuccess(`A categoria foi deletada com sucesso!`);

      this.categoryService.refresh();
    });
  }
}

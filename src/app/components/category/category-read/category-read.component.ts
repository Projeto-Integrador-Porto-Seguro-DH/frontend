import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Categoria } from 'src/app/model/Categoria';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryReadDataSource } from './category-read-datasource';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Categoria>;
  dataSource: CategoryReadDataSource;
 
  //Exibição das colunas do Header da Tabela:
  displayedColumns = ['id', 'nome', 'descricao'];
  
  public categoriaLista: Categoria[];

  constructor(private categoryService: CategoryService) { 
    this.dataSource = new CategoryReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  // READ
  ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe((resp: Categoria[]) => {
        this.categoriaLista = resp;
      })
  }

  getAllCategories(){

  }
}

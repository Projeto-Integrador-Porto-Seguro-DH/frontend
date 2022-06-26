import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Produto } from 'src/app/model/Produto';
import { ProductService } from 'src/app/services/product.service';
import { ProductReadDataSource } from './product-read-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Produto>;
  dataSource: ProductReadDataSource;

  displayedColumns = ['id', 'nome', 'descricao','preco', 'estoque', 'categoria', 'disponivel', 'foto', 'gerenciar'];

  public produtoLista: Produto[];

  constructor(private productService : ProductService) {
    this.dataSource = new ProductReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  ngOnInt(): void {
    this.productService.getProduct().subscribe((resp: Produto[])=>{
      this.dataSource.data = resp;
      this.produtoLista = this.dataSource.data
    })
  }
}

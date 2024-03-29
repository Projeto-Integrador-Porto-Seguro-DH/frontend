import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Produto } from 'src/app/model/Produto';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductReadDataSource } from './product-read-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css'],
})
export class ProductReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Produto>;
  dataSource: ProductReadDataSource;

  displayedColumns = [
    'id',
    'nome',
    'descricao',
    'preco',
    'estoque',
    'categoria',
    'disponivel',
    'foto',
    'gerenciar',
  ];
  deletar: any;
  erro = '';
  index: number;

  constructor(
    private productService: ProductService,
    private alertService: AlertService
    ) {
    this.dataSource = new ProductReadDataSource();
  }

  refresh(): void{
    window.location.reload();
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((resp: Produto[]) => {
      this.dataSource.data = resp;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  clearFormDeletar(): void {
    this.deletar.nativeElement.value = '';
  }

  delete(): void {
    this.productService
      .deleteProduct(this.index)
      .subscribe({
        next: () => {
          this.alertService.alertSuccess('Produto deletado com sucesso!');
          this.refresh()
        },
        error: (error) => {
          this.erro = error;
          console.log(this.erro);
        },
      });
  }

  pegarId(id: number) {
    this.index = id;
    console.log(this.index);
  }
}

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Produto } from 'src/app/model/Produto';


export class ProductReadDataSource extends DataSource<Produto> {
  data: Produto[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }


  connect(): Observable<Produto[]> {
    if (this.paginator && this.sort) {

      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Não foi possível realizar a conexão');
    }
  }


  disconnect(): void {}

  private getPagedData(data: Produto[]): Produto[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }


  private getSortedData(data: Produto[]): Produto[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(+a.idProduto, +b.idProduto, isAsc);
        case 'nome': return compare(a.nomeProduto!, b.nomeProduto!, isAsc);
        case 'preco': return compare(a.precoUnitarioProduto!, b.precoUnitarioProduto!, isAsc);
        case 'estoque': return compare(a.estoqueProduto!, b.estoqueProduto!, isAsc);
        case 'categoria': return compare(a.categoria?.nomeCategoria!, b.categoria?.nomeCategoria!, isAsc);

        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

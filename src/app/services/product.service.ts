import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';
import { environment } from 'src/environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public search = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient,
    private matSnackBar: MatSnackBar) {}

  postProduct(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${environment.apiUrl}/produtos/add`,
      produto
    );
  }

  putProduct(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(
      `${environment.apiUrl}/produtos/update`,
      produto
    );
  }

  getProduct(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.apiUrl}/produtos`);
  }

  getById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${environment.apiUrl}/produtos/${id}`);
  }

  deleteProduct(id: number): Observable<Produto> {
    return this.http.delete<Produto>(
      `${environment.apiUrl}/produtos/delete/${id}`
    );
  }

  showMessage(msg: string) {
    this.matSnackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}

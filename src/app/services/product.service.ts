import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  postProduct(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(
      `${environment.apiUrl}/produtos/add`,
      produto
    );
  }

  getProduct(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.apiUrl}/produtos`);
  }

  deleteProduct(id: number): Observable<Produto> {
    return this.http.delete<Produto>(
      `${environment.apiUrl}/produtos/delete/${id}`
    );
  }
}
